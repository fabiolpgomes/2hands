import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import CreateProduct from "./pages/CreateProduct";
import HomePage from "./pages/HomePage";
import DetailProduct from "./pages/DetailProduct";
import Navbar from "./components/navbar";
import ErrorPage from "./pages/ErrorPage";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/allProducts/:productId" element={<DetailProduct />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Link to="/about">
        <footer className="footer" margin-top="5px" responsive="sm">
          Desenvolvido por Bruno Apostolo e Fabio Gomes @2022
        </footer>
      </Link>
    </div>
  );
}

export default App;
