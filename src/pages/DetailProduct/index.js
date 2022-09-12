import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailProduct() {
  const { productId } = useParams();
  const [produto, setProduto] = useState({});

  useEffect(() => {
    async function fetchProduto() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/2hands/${productId}`
        );
        setProduto(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduto();
  }, []);
  console.log(produto);
  const [indexImage, setIndexTo] = useState(0);
  function changeIndex(e) {
    if (indexImage === 2) {
      setIndexTo(0);
    } else {
      setIndexTo(indexImage + 1);
    }
  }
  let imagemRenderizada = produto.img_url[indexImage];

  return (
    <div>
      <img
        style={{ height: "130px" }}
        src={imagemRenderizada}
        onClick={changeIndex}
      />
      <p>
        <strong>{produto.name}</strong>
      </p>
      <p>
        <strong>Descrição:</strong>
      </p>
      <p>{produto.description}</p>
      <p>
        <strong>Preço: </strong> {produto.price} R$
      </p>
      <div>
        <p>
          <strong>Vendedor: </strong>
          {produto.seller}
        </p>

        <p>
          <strong>Telefone do vendedor: </strong> {produto.tel_seller}
        </p>
        <p>
          <strong>Email do vendedor: </strong> {produto.email_seller}
        </p>
      </div>
    </div>
  );
}
export default DetailProduct;
