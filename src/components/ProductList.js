import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
  const ErrorMessage = (
    <h1>No Product</h1>
  );

  const ProductList = (
    
     <div className="row">
     {props.products.error.response ? 
     <h1>API ERROR</h1> :  

     props.products.products.map(product =>
     <div className="card" key={product._id}>
     <h3>{product.product_name}</h3>
     <img src={product.product_img} alt="img"/> 
     <Link to={`product/${product._id}`}><button type="submit" value="Submit" style={{width:100, height:50}}>Edit</button></Link>
     <button type="submit" value="Submit" onClick={() => props.deleteProduct(product._id)} style={{width:100, height:50}}>Delete</button>

     </div>
      )
      }
     </div>
  );

  return (
    <div>
         {props.products.length === 0 ? ErrorMessage : ProductList }
     </div>
  );
}

export default ProductList;

















