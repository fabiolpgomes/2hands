import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EditeForm from "../../components/EditForm";

function DetailProduct() {
  const { productId } = useParams();
  const [produto, setProduto] = useState({});
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    img_url: [],
    seller: "",
    tel_seller: "",
    email_seller: "",
    category: "",
  });

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
        setForm(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduto();
  }, [productId]);

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

  async function handleDelete(e) {
    e.preventDefault();
    try {
      await axios.delete(`https://ironrest.herokuapp.com/2hands/${productId}`);

      navigate("/allProducts");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      {showForm && loading === false && (
        <EditeForm
          form={form}
          setForm={setForm}
          productId={productId}
          showForm={showForm}
          setShowForm={setShowForm}
        />
      )}
      {!showForm && (
        <button onClick={() => setShowForm(!showForm)}>
          Editar cadatro do produto
        </button>
      )}

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

          <button onClick={handleDelete}>Deletar Produto</button>
        </div>
      )}
    </div>
  );
}
export default DetailProduct;
