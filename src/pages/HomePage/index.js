import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();
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
      </div>
    </>
  );
}

export default HomePage;
