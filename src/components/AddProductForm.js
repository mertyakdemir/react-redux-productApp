import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';

class AddProductForm extends Component {
    
    state = {
        _id: this.props.product ? this.props.product._id : '',
        product_name: this.props.product ? this.props.product.product_name : '',
        product_img:  this.props.product ? this.props.product.product_img : ''
    };
    
    newProduct1 = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {

        e.preventDefault();
        const _id = this.state._id || this.props.newProduct.product._id;
        
        if(!_id)
            this.props.insertProduct(this.state);
        
        else 
            this.props.updateProduct({...this.state, _id});
         
        this.props.history.push('/products');
        window.location.reload();
        
    }

    componentWillReceiveProps(nextProps) {
        
		const { product } = nextProps.newProduct;
		if (
			product.product_name
			&&
			product.product_name !== this.state.product_name
		) {
			this.setState({
				product_name: product.product_name,
				product_img: product.product_img,
			});
            console.log(nextProps.newProduct)
        }
	}

    
  render() {
    console.log(this.props.product)

  return (
    <div className="Form">
    <h2>Add Product</h2>

   <form onSubmit={this.onSubmit}>
   <label>Product Name</label><br />
   <input id="product_name" name="product_name" value={this.state.product_name} onChange={this.newProduct1} style={{width:"30%", height:20}} /><br />
   <label>Product Image URL</label><br />
   <input id="product_img" name="product_img" value={this.state.product_img} onChange={this.newProduct1} style={{width:"30%", height:50}} /><br /><br />
   <div>
   <img src={this.state.product_img} alt="img" /> 
   </div>
   <button type="submit" style={{width:100, height:50}}>Submit</button>

   </form> 

   </div>
   
  );
  }
}

export default withRouter(AddProductForm);
