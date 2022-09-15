import "./allproducts.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllProducts() {
  const [searchBar, setSearchBar] = useState("");
  function handleChange(e) {
    setSearchBar(e.target.value);
  }
  const [itemsParaVenda, setItems2hands] = useState([]);
  useEffect(() => {
    async function fetchComAxios() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/2hands"
        );
        setItems2hands(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchComAxios();
  }, []);
  console.log(itemsParaVenda);

  const [categoria, setCategoria] = useState("");

  function handleClick(e) {
    e.preventDefault();
    setCategoria(e.target.value);
  }
  return (
    <>
      <div container-lg
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: "90px",
          borderRadius: "5px"
        }}
      >
        <label classeName="search ms-2">Pesquise nossos produtos</label>
        <input onChange={handleChange}></input>
      </div>
      <div>
        <p ClasseName="category">Categoria de produto</p>
        <div className="category-product">
          <button value="" onClick={handleClick}>
            Todas as categorias
          </button>
          <button value="Autos e peças" onClick={handleClick}>
            Autos e peças
          </button>
          <button value="Para Casa" onClick={handleClick}>
            Para casa
          </button>
          <button value="Eletronicos e celulares" onClick={handleClick}>
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

      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: "40px",
          justifyContent: "center",
        }}
      >
        {itemsParaVenda
          .filter((item) => {
            return (
              item.name.toLowerCase().includes(searchBar.toLowerCase()) &&
              item.category.includes(categoria)
            );
          })
          .map((item) => {
            return (
              <div>
                <Link to={`/allProducts/${item._id}`}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <img style={{ width: "20vh" }} src={item.img_url[0]} />
                    <h4>{item.name}</h4>
                    <p>
                      <strong>Preço: </strong>
                      {item.price}
                    </p>
                    <p>
                      <strong>Categoria: </strong>
                      {item.category}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default AllProducts;
