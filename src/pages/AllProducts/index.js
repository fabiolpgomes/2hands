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
    <>
      <div
        className="bisavo"
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "90px",
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
                    <Card
                      key={item._id}
                      style={{
                        height: "20rem",
                        width: "14rem",
                        margin: "20px",
                      }}
                      className="item-card"
                    >
                      <Link to={`/allProducts/${item._id}`}>
                        <Card
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <Card.Img
                            style={{ width: "20vh" }}
                            src={item.img_url[0]}
                          />
                          <Card.Title>{item.name}</Card.Title>
                          <Card.Text>
                            <strong>Preço: </strong>
                            {item.price}
                          </Card.Text>
                          <Card.Text>
                            <strong>Categoria: </strong>
                            {item.category}
                          </Card.Text>
                        </Card>
                      </Link>
                    </Card>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProducts;
