import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
    <div className="header-left">
      <Link to="/" className="active">Homepage</Link>
      <Link to="/products">Products</Link>
      <Link to="/products/new">Add Product</Link>
    </div>
  </div>
  );
}

export default Header;
