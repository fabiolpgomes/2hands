import "./create.product.css";
import axios from "axios";
import { useEffect, useState } from "react";
import twoHands1 from "../../assets/2Hands1.png";
import twoHands2 from "../../assets/2Hands2.png";
import twoHands3 from "../../assets/2Hands3.png";
import { useNavigate } from "react-router-dom";
import { Form, Col, Row, Button } from "react-bootstrap";

function CreateProduct() {
  const navigate = useNavigate();
  const [imgsForm, setImagesForm] = useState({
    image1: "",
    image2: "",
    image3: "",
  });
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

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const clone = { ...form };
    if (clone.img_url[0] === "") {
      clone.img_url[0] = twoHands1;
    }
    if (clone.img_url[1] === "") {
      clone.img_url[1] = twoHands2;
    }
    if (clone.img_url[2] === "") {
      clone.img_url[2] = twoHands3;
    }

    try {
      await axios.post("https://ironrest.herokuapp.com/2hands", form);
      navigate("/allProducts");
    } catch (error) {
      console.log(error);
    }
  }

  function imagesHandleChange(e) {
    setImagesForm({ ...imgsForm, [e.target.name]: e.target.value });
    setForm({
      ...form,
      img_url: [imgsForm.image1, imgsForm.image2, imgsForm.image3],
    });
  }

  console.log(form);
  console.log(imgsForm);

  return (
    <div
      className="d-flex flex-column container-lg"
      style={{
        flexWrap: "wrap",
        marginTop: "80px",
      }}
    >
      <h2 className="text-center">
        <strong>Desapega, anuncie o seu produto</strong>
      </h2>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="mb-1 text-muted col-3">
            <Form.Group className="mb-3" controlId="formBasicProductName">
              <Form.Label className="text-start text-muted fs-5">
                Nome do produto
              </Form.Label>
              <Form.Control
                name="name"
                value={form.name}
                onChange={handleChange}
                maxlength="25"
              />
            </Form.Group>
          </Col>

          <Col className="mb-1 col-2">
            <Form.Group className="mb-2" controlId="formBasicProductPrice">
              <Form.Label className="text-start text-muted fs-5">
                Preço do produto
              </Form.Label>
              <Form.Control
                name="price"
                value={form.price}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="formBasicProductSellerEmail"
            >
              <Form.Label className="text-start text-muted fs-5 text-muted">
                Categoria
              </Form.Label>
              <Form.Select name="category" onChange={handleChange} required>
                <option>Categoria dos Produtos</option>
                <option value="Autos e peças">Autos e peças</option>
                <option value="Para Casa">Para Casa</option>
                <option value="Eletronicos e celulares">
                  Eletronicos e celulares
                </option>
                <option value="Esporte e lazer">Esporte e lazer</option>
                <option value="Moda e beleza">Moda e beleza</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicProductDescription">
          <Form.Label className="text-start text-muted fs-5">
            Descrição do produto
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Row>
          <Col className="mb-1 text-muted col-3">
            <Form.Label className="text-start text-muted fs-5">
              Insira foto 1
            </Form.Label>
            <Form.Control
              name="image1"
              value={imgsForm.image1}
              onChange={imagesHandleChange}
            />
          </Col>
          <Col className="mb-1 text-muted col-3">
            <Form.Label className="text-start text-muted fs-5">
              Insira foto 2
            </Form.Label>
            <Form.Control
              name="image2"
              value={imgsForm.image2}
              onChange={imagesHandleChange}
            />
          </Col>
          <Col className="mb-1 text-muted col-3">
            <Form.Label className="text-start text-muted fs-5">
              Insira foto 3
            </Form.Label>
            <Form.Control
              name="image3"
              value={imgsForm.image3}
              onChange={imagesHandleChange}
            />
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicSellerName">
          <Form.Label className="text-start text-muted fs-5">
            Nome do vendedor
          </Form.Label>
          <Form.Control
            name="seller"
            value={form.seller}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicProductSellerTel">
          <Form.Label className="text-start text-muted fs-5">
            Telefone do vendedor:
          </Form.Label>
          <Form.Control
            name="tel_seller"
            value={form.tel_seller}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicProductSellerEmail">
          <Form.Label className="text-start text-muted fs-5">
            Email do vendedor:
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email_seller"
            value={form.email_seller}
            onChange={handleChange}
          />

          <Button
            variant="success"
            size="lg"
            className="button-save mb-5"
            type="submit"
            onClick={imagesHandleChange}
          >
            Incluir
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
export default CreateProduct;
