import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <p className="link">
      <Link  to="/products">Products</Link>
      </p> 
      <p className="link">
      <Link  to="/products/new">Add Product</Link>
      </p> 
    </div>
  );
}

export default Home;
