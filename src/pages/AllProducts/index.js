import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllProducts() {
<<<<<<< HEAD
        const [product, setProduct] = useState([]);
  



=======
  const [itemsParaVenda, setItems2hands] = useState([]);
>>>>>>> cbc20ce5fe2863679d3768697c435ee8913e3fee
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

  return (
    <>
      {itemsParaVenda.map((item) => {
        return (
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
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
    </>
  );
}

export default AllProducts;
