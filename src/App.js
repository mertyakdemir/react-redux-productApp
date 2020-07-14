import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ProductsPage from './components/ProductsPage'
import Header from'./components/Header';
import Home from'./components/Home';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Route exact path="/"  component={Home}></Route>
     <Route exact path='/products' component={ProductsPage}></Route>
     <Route exact path='/products/new' component={AddProduct}></Route>
     <Route exact path='/product/:_id' component={AddProduct}></Route>
    </div>
  );
}

export default App;
