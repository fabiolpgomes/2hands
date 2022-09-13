import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailProduct() {
  const { productId } = useParams();
  const [produto, setProduto] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchProduto() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://ironrest.herokuapp.com/2hands/${productId}`
        );
        console.log(response.data);
        setProduto(response.data);
        setImage(response.data.img_url[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProduto();
  }, []);
  console.log(loading);
  console.log(produto);
  const [imagemAqui, setImage] = useState();
  const [indexImagem, setIndexImagem] = useState(1);

  function handleChangeIndex(e) {
    if (indexImagem === 2) {
      setIndexImagem(0);
      setImage(produto.img_url[indexImagem]);
    } else {
      setIndexImagem(indexImagem + 1);
      setImage(produto.img_url[indexImagem]);
    }
  }

  console.log(loading);
  return (
    <div>
      {loading === false && (
        <div>
          <img
            style={{ height: "200px" }}
            src={imagemAqui}
            onClick={handleChangeIndex}
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
      )}
    </div>
  );
}
export default DetailProduct;
