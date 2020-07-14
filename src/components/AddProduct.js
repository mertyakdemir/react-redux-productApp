import React, {  Component } from 'react';
import { connect } from 'react-redux';
import AddProductForm from './AddProductForm';
import { insertProduct, getProduct, updateProduct } from '../actions/addProduct';

class AddProduct extends Component {
 
  componentDidMount() {
    const { match} = this.props
    if (!this.props.product && match.params._id) {
       this.props.getProduct(match.params._id);
    }
  }

 render() {
   return (
    <div>
     <AddProductForm 
      insertProduct={this.props.insertProduct} product={this.props.product} 
      newProduct={this.props.newProduct} updateProduct={this.props.updateProduct}/>
    </div>
  );
   }
}

const mapStateToProps = ({ newProduct, products }, props) => {
    return {
      newProduct,
      product: products.products.find( x => x._id === props.match.params._id)
    }
}


const mapDispatchToProps = {
     insertProduct,
     getProduct,
     updateProduct
}

export default connect(mapStateToProps,mapDispatchToProps)(AddProduct);
