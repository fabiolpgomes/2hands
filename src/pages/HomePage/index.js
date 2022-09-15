import axios from "axios";
import { useState, useEffect } from "react";

import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
<<<<<<< HEAD

function HomePage() {
  const [searchBar, setSearchBar] = useState("");

  function handleChange(e) {
    setSearchBar(e.target.value);
  }
  const [categoria, setCategoria] = useState("");

  function handleClick(e) {
    e.preventDefault();
    setCategoria(e.target.value);
  }
  console.log(categoria);
  return (
    <>
      <label>Faça sua pesquisa de produtos</label>
      <input onChange={handleChange}></input>
      <Link to={`searchBar/${searchBar}`}>
        <button>LUPA</button>
      </Link>
      <div>
        <label>Categorias de produto</label>
        <div>
          <button value="Autos e paças" onClick={handleClick}>
            Autos e peças
          </button>
          <button value="Para casa" onClick={handleClick}>
            Para casa
          </button>
          <button value="Eletronicos" onClick={handleClick}>
            Eletronicos e celulares
          </button>
          <button value="Esporte e lazer" onClick={handleClick}>
            Esporte e lazer
          </button>
          <button value="Moda e beleza" onClick={handleClick}>
            Moda e beleza
          </button>
        </div>
=======
import Button from "react-bootstrap/Button";
import Banner from "../../components/Banner";
import CardsCarrosel from "../../components/CardsCarrosel";

function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "80%" }}>
      <Banner />

      <div style={{ marginTop: "160px", alignSelf: "center" }}>
        <Link style={{ margin: "auto" }} to="/allProducts">
          <Button>Conferir os produtos disponíveis</Button>
        </Link>
        <CardsCarrosel />
>>>>>>> 29f4e865d42a2611da658e0000ba0bd5489866db
      </div>
    </div>
  );
}

export default HomePage;
