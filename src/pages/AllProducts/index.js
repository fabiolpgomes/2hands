import "./allproducts.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

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
    <div
      container-lg
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: "90px",
      }}
    >
      <div>
        <label>Pesquise nossos produtos</label>
        <input onChange={handleChange}></input>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="success" value="" onClick={handleClick}>
          Todas as categorias
        </Button>
        <Button value="Autos e peças" onClick={handleClick}>
          Autos e peças
        </Button>
        <Button value="Para Casa" onClick={handleClick}>
          Para casa
        </Button>
        <Button value="Eletronicos e celulares" onClick={handleClick}>
          Eletronicos e celulares
        </Button>
        <Button value="Esporte e lazer" onClick={handleClick}>
          Esporte e lazer
        </Button>
        <Button value="Moda e beleza" onClick={handleClick}>
          Moda e beleza
        </Button>
      </div>

      <div
        className="bisavo"
        style={{
          display: "flex",

          flexWrap: "wrap",
          marginTop: "40px",
          justifyContent: "center",
        }}
      >
        <div style={{ margin: "30px" }}>
          <label>Pesquise nossos produtos</label>
          <input style={{ margin: "10px" }} onChange={handleChange}></input>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            className="ms-3 me-3 mt-4"
            variant="success"
            value=""
            onClick={handleClick}
          >
            Todas as categorias
          </Button>
          <Button
            className="me-3 mt-4"
            value="Autos e peças"
            onClick={handleClick}
          >
            Autos e peças
          </Button>
          <Button className="me-3 mt-4" value="Para Casa" onClick={handleClick}>
            Para casa
          </Button>
          <Button
            className="me-3 mt-4"
            value="Eletronicos e celulares"
            onClick={handleClick}
          >
            Eletronicos e celulares
          </Button>
          <Button
            className="me-3 mt-4"
            value="Esporte e lazer"
            onClick={handleClick}
          >
            Esporte e lazer
          </Button>
          <Button
            className="me-3 mt-4"
            value="Moda e beleza"
            onClick={handleClick}
          >
            Moda e beleza
          </Button>
        </div>

        <div
          className="divavo"
          style={{
            display: "flex",
            width: "100%",
            //flexDirection: "row",
            marginTop: "40px",
          }}
        >
          <div>
            <div
              className="DivPai"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                width: "100%",
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
                  <div
                    className="card m-1"
                    style={{ width: "14rem", minheight: "25rem" }}
                    key={item._id}
                  >
                    <Link
                      to={`/allProducts/${item._id}`}
                      className="text-reset text-decoration-none"
                    >
                      <img
                        src={item.img_url[0]}
                        alt="produto"
                        className="card-img-top"
                        style={{ minHeight: "9rem", minWidth: "6rem" }}
                      />

                      <div className="card-body">
                        <div className="card-title">
                          <strong>{item.name}</strong>
                        </div>
                        <div className="card-text text-muted">
                          <strong>R$ {item.price}</strong>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}

          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
