import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Col, Row, Button } from "react-bootstrap";

function EditeForm({
  form,
  setForm,
  productId,
  showForm,
  setShowForm,
  imagesHandleChange,
}) {
  const navigate = useNavigate();
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  console.log(form.img_url);

  const [imgsForm, setImagesForm] = useState({
    image1: form.img_url[0],
    image2: form.img_url[1],
    image3: form.img_url[2],
  });
  function handleChangeImage(e) {
    setImagesForm({ ...imgsForm, [e.target.name]: e.target.value });
    setForm({
      ...form,
      img_url: [imgsForm.image1, imgsForm.image2, imgsForm.image3],
    });
    console.log(imgsForm);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setForm({
      ...form,
      img_url: [imgsForm.image1, imgsForm.image2, imgsForm.image3],
    });

    try {
      delete form._id;
      await axios.put(
        `https://ironrest.herokuapp.com/2hands/${productId}`,
        form
      );
    } catch (error) {
      console.log(error);
    }
    navigate("/allProducts");
  }

  return (
    <div className="d-flex flex-column">
      <h3 className="text-center">Alterar o seu Produto</h3>

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

          <Col className="mb-1 col-3">
            <Form.Group
              className="mb-3"
              controlId="formBasicProductSellerEmail"
            >
              <Form.Label className="text-start text-muted fs-5 text-muted">
                Categoria
              </Form.Label>
              <Form.Select name="category" onChange={handleChange} required>
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
              onChange={handleChangeImage}
            />
          </Col>
          <Col className="mb-1 text-muted col-3">
            <Form.Label className="text-start text-muted fs-5">
              Insira foto 2
            </Form.Label>
            <Form.Control
              name="image2"
              value={imgsForm.image2}
              onChange={handleChangeImage}
            />
          </Col>
          <Col className="mb-1 text-muted col-3">
            <Form.Label className="text-start text-muted fs-5">
              Insira foto 3
            </Form.Label>
            <Form.Control
              name="image3"
              value={imgsForm.image3}
              onChange={handleChangeImage}
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

          <button onClick={() => setShowForm(!showForm)}>
            Cancelar alterações no produto
          </button>
          <button type="submit" onClick={handleChangeImage}>
            Salvar alterações
          </button>
        </Form.Group>
      </Form>
    </div>
  );
}
export default EditeForm;
