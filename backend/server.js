import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
dotenv.config();

const dbUrl = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`;

const validate = data => {
  let errors = {};
  if (data.product_name === '') errors.product_name = "Can't be empty";
  if (data.product_img === '') errors.product_img = "Can't be empty";
  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid };
};

mongodb.MongoClient.connect(dbUrl, (err, db) =>  {
  
  if (err) {
    throw new Error(err);
  }

  app.get('/api/products', (req, res) => {
    db.collection('products').find({}).toArray((err, products) => {
      res.json({ products });
    });
  });

  app.post('/api/products', (req, res) => {
    const { errors, isValid } = validate(req.body);
    if (isValid) {
      const { product_name, product_img } = req.body;
      db.collection('products').insert({ product_name, product_img }, (err, result) => {
        if (err) {
          res.status(500).json({ errors: { global: "Something went wrong" }});
        } else {
          res.json({ product: result.ops[0] });
        }
      });
    } else {
      res.status(400).json({ errors });
    }
  });

  app.put('/api/products/:_id', (req, res) => {
    const { errors, isValid } = validate(req.body);

    if (isValid) {
      const { product_name, product_img } = req.body;
      db.collection('products').findOneAndUpdate(
        { _id: new mongodb.ObjectId(req.params._id) },
        { $set: { product_name, product_img } },
        { returnOriginal: false },
        (err, result) => {
          if (err) { res.status(500).json({ errors: { global: err }}); return; }

          res.json({ product: result.value });
        }
      );
    } else {
      res.status(400).json({ errors });
    }
  });

  app.get('/api/products/:_id', (req, res) => {
    db.collection('products').findOne({ _id: new mongodb.ObjectId(req.params._id) }, (err, product) => {
      res.json({ product });
    })
  });

  app.delete('/api/products/:_id', (req, res) => {
    db.collection('products').deleteOne({ _id: new mongodb.ObjectId(req.params._id) }, (err, r) => {
      if (err) { res.status(500).json({ errors: { global: err }}); return; }

      res.json({});
    })
  });

  app.use((req, res) => {
    res.status(404).json({
      errors: {
        global: "Still working on it. Please try again later when we implement it."
      }
    });
  });

  app.listen(8080, () => console.log('Server is running on localhost:8080'));

});
