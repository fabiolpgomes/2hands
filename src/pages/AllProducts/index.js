import axios from "axios";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllProducts() {
        const [product, setProduct] = useState([]);
  



  useEffect(() => {
    async function fetchComAxios() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/2hands"
        );

        setProduct(response.data);

      } catch (error) {
        console.log(error);
      }
    }

    fetchComAxios();
  }, []);
  console.log(product);

  return (
    <>
      {product.map((product) => {
        return (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Link to={`/allProduct/${product._id}`}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img
                  style={{ width: "20vh" }}
                  src={product.img_ulr[0]}
                  alt="logo"
                />
                <h4>{product.name}</h4>
                <p>
                  <strong>Preço:</strong>
                  {product.price}
                </p>
                <p>
                  <strong>Categoria:</strong>
                  {product.category}

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
