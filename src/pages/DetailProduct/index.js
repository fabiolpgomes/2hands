import "./detailproduct.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
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
    <div
      style={{ marginBottom: "40px" }}
      className="DetailProduct container-lg"
    >
      {loading === false && (
        <Card style={{ marginTop: "90px" }}>
          <Card.Img
            style={{ width: "400px" }}
            src={imagemAqui}
            onClick={handleChangeIndex}
          />
          <Card.Body>
            <Card.Title>
              <strong>{produto.name}</strong>
            </Card.Title>
            <Card.Text>
              <strong>Descrição:</strong>
            </Card.Text>
            <Card.Text>{produto.description}</Card.Text>
            <Card.Text>
              <strong>Preço: </strong> R${produto.price}
            </Card.Text>
            <Card.Text>
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

              <p>
                <strong>Categoria do Produtor: </strong> {produto.category}
              </p>
              <div>
                <Button variant="danger" onClick={handleDelete}>
                  Deletar Produto
                </Button>

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
                  <Button
                    className="ms-3"
                    variant="warning"
                    onClick={() => setShowForm(!showForm)}
                  >
                    Editar cadastro do produto
                  </Button>
                )}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
export default DetailProduct;
