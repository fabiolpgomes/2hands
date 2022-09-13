import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailProduct() {
  const { productId } = useParams();
  const [produto, setProduto] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchProduto() {
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

<<<<<<< HEAD
    fetchProduto();
  }, []);
  console.log(loading);
  console.log(produto);
  const [imagemAqui, setImage] = useState();
  const [indexImagem, setIndexImagem] = useState(1);

  function handleChangeIndex(e) {
    if (indexImagem === 2) {
=======
   fetchProduct();
    setImage(product.img_url[0]);
  }, [productId]);

  console.log(product);
  
  const [indexImage, setIndex] = useState(0);
  const [indexImagem, setIndexImagem] = useState(0);
  
  if (indexImagem === 2) {
>>>>>>> 8105273c44c8394fa3564a51497e1f8faea2e120
      setIndexImagem(0);
      setImage(product.img_url[indexImagem]);
    } else {
      setIndexImagem(indexImagem + 1);
      setImage(product.img_url[indexImagem]);
    }
  }
  
  console.log(loading);
  
  
  return (
    <div>
      {loading === false && (
        <div>
          <img
            style={{ height: "200px" }}
            src={imageRender}
            onClick={handleChangeIndex}
          />

          <p>
            <strong>{product.name}</strong>
          </p>
          <p>
            <strong>Descrição:</strong>
          </p>
          <p>{product.description}</p>
          <p>
            <strong>Preço: </strong> {product.price} R$
          </p>
          <div>
            <p>
              <strong>Vendedor: </strong>
              {product.seller}
            </p>

            <p>
              <strong>Telefone do vendedor: </strong> {product.tel_seller}
            </p>
            <p>
              <strong>Email do vendedor: </strong> {product.email_seller}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

     
export default DetailProduct;
