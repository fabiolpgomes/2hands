import "./App.css";
import React from "react";
import { Navbar } from "./components/navBar";
import { Routes, Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import AllProducts from "./pages/AllProducts";

import CreateProduct from "./pages/CreateProduct";
import HomePage from "./pages/HomePage";
import DetailProduct from "./pages/DetailProduct";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/createProduct" element={<CreateProduct />} />
          <Route path="/detailsProduct" element={<DetailProduct />} />
          <Route path="/allProducts/:productId" element={<DetailProduct />} />
        </Routes>

        <footer className="footer">
          Desenvolvido por Bruno Apostolo e Fabio Gomes @2022
        </footer>
      </>
    </div>
  );
}

export default App;
