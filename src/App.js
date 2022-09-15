import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./assets/2Hands1.png";
import { Button } from "react-bootstrap";
import AllProducts from "./pages/AllProducts";
import CreateProduct from "./pages/CreateProduct";
import HomePage from "./pages/HomePage";
import DetailProduct from "./pages/DetailProduct";
import Navbar from "./components/navBar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/allProducts/:productId" element={<DetailProduct />} />
      </Routes>
      <footer className="footer" margin-top="5px" responsive="sm">
        Desenvolvido por Bruno Apostolo e Fabio Gomes @2022
      </footer>
    </div>
  );
}

export default App;
