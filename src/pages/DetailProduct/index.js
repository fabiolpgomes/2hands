import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/2hands/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, [productId]);

  console.log(product);

  const [indexImage, setIndex] = useState(0);
  function changeIndex(e) {
    if (indexImage === 2) {
      setIndex(0);
    } else {
      setIndex(indexImage + 1);
    }
  }
  let imageRender = product.img_url[indexImage];

  return (
    <div>
      <img
        style={{ height: "130px" }}
        src={imageRender}
        onClick={changeIndex}
        alt="foto"
      />
      <p>
        <strong>{product.name}</strong>
      </p>
      <p>
        <strong>Descrição:</strong>
      </p>
      <p>
        <strong>{product.description}</strong>
      </p>
      <p>
        <strong>Preço:</strong> {product.price} R$
      </p>
      <div>
        <p>
          <strong>Vendedor: </strong>
          {product.price}
        </p>
        <p>
          <strong>Telefone do vendedor: </strong>
          {product.tel_seller}
        </p>
        <p>
          <strong>Email do vendedor: </strong>
          {product.email_seller}
        </p>
      </div>
    </div>
  );
}

export default DetailProduct;
