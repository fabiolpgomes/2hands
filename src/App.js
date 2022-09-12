import "./App.css";
import React from "react";

import logo from "./assets/2Hands1.png";
import Button from "react-bootstrap/Button";
import CreateProduct from "./components/CreateProduct";

function App() {
  return (
    <>
      <div className="d-flex flex-column">
        <nav className="navbar shadow-md rounded-bottom">
          <img src={logo} mt-1 alt="logo" height={70} />
          <Button variant="warning">Eu Quero Vender</Button>
        </nav>
      </div>

      <div className="App"></div>

      <CreateProduct />
      <footer className="footer">
        Desenvolvido por Bruno Cesar e Fabio Gomes @2022
      </footer>
    </>
  );
}

export default App;
