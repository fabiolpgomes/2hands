import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./assets/2Hands1.png";
import Button from "react-bootstrap/Button";
import AllProducts from "./pages/AllProducts";
import CreateProduct from "./pages/CreateProduct";
import HomePage from "./pages/HomePage";
import DetailProduct from "./pages/DetailProduct";

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column">
        <nav className="navbar shadow-md rounded-bottom">
          <Link to="/">
            <img src={logo} mt-1 alt="logo" height={70} />
          </Link>
          <Link to="/createProduct">
            <Button variant="warning">Eu Quero Vender</Button>
          </Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/allProducts/:productId" element={<DetailProduct />} />
      </Routes>
      <footer className="footer">
        Desenvolvido por Bruno Apostolo e Fabio Gomes @2022
      </footer>
    </div>
  );
}

export default App;
