import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import CreateProduct from "./pages/CreateProduct";
import HomePage from "./pages/HomePage";
import DetailProduct from "./pages/DetailProduct";
import Navbar from "./components/navbar";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/allProducts/:productId" element={<DetailProduct />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <footer className="footer" margin-top="5px" responsive="sm">
        Desenvolvido por Bruno Apostolo e Fabio Gomes @2022
      </footer>
    </div>
  );
}

export default App;
