import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductList from './ProductList';

import { getProducts, deleteProduct } from '../actions/products';

function ProductsPage(props) {

  const {getProducts} = props

  useEffect(() => {
    getProducts();
  }, [getProducts])

  /* 
  useEffect(() => {
    props.getProducts();
  }, [])
  */

  return (
    <div>
     <h1>Product List</h1>
     <ProductList products={props.products} deleteProduct={props.deleteProduct} />
    </div>
  );
}

const mapStateToProps = ({ products }) => {
    return {
        products
    }
}

const mapDispatchToProps = {
     getProducts,
     deleteProduct
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsPage);
