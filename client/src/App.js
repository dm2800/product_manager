import React, {useEffect} from "react";
import './App.css';
import axios from "axios";
import AllProducts from './components/AllProducts';
import NewProduct from './components/NewProduct';
import OneProduct from './components/OneProduct';
import EditProduct from "./components/EditProduct";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
  
      <div className="App">
        <Routes>
          <Route element = {<AllProducts/>} path="/" />
          <Route element = {<NewProduct/>} path="/new" />
          <Route element = {<OneProduct/>} path="/products/:id" />
          <Route element = {<EditProduct/>} path="/products/edit/:id" />
        </Routes>
    
      </div>
    </BrowserRouter>
  );
}

export default App;
