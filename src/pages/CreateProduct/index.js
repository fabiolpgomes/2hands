import axios from "axios";
import { useEffect, useState } from "react";
import twoHands1 from "../../assets/2Hands1.png";
import twoHands2 from "../../assets/2Hands2.png";
import twoHands3 from "../../assets/2Hands3.png";
import { useNavigate } from "react-router-dom";

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nome do produto</label>
        <input name="name" value={form.name} onChange={handleChange}></input>
        <label>Descrição do produto</label>
        <input
          name="description"
          value={form.description}
          onChange={handleChange}
        ></input>
        <label>Preço do produto</label>
        <input name="price" value={form.price} onChange={handleChange}></input>

        <form>
          <label>Insira a imagem 1</label>
          <input
            name="image1"
            value={imgsForm.image1}
            onChange={imagesHandleChange}
          ></input>
          <label>Insira a imagem 2</label>
          <input
            name="image2"
            value={imgsForm.image2}
            onChange={imagesHandleChange}
          ></input>
          <label>Insira a imagem 3</label>
          <input
            name="image3"
            value={imgsForm.image3}
            onChange={imagesHandleChange}
          ></input>
        </form>

        <label>Nome do vendedor</label>
        <input
          name="seller"
          value={form.seller}
          onChange={handleChange}
        ></input>
        <label>Telefone do vendedor:</label>
        <input
          name="tel_seller"
          value={form.tel_seller}
          onChange={handleChange}
        ></input>
        <label>Email do vendedor:</label>
        <input
          name="email_seller"
          value={form.email_seller}
          onChange={handleChange}
        ></input>
        <label>Tipo de produto</label>
        <select name="category" onChange={handleChange} required>
          <option value="Autos e pecas">Autos e pecas</option>
          <option value="Para casa">Para casa</option>
          <option value="Eletronicos e celulares">
            Eletronicos e celulares
          </option>
          <option value="Esporte e lazer">Esporte e lazer</option>
          <option value="Moda e beleza">Moda e beleza</option>
        </select>
        <button
          className="btn btn-light btn-outline-dark"
          type="submit"
          onClick={imagesHandleChange}
        >
          Incluir
        </button>
      </form>
    </div>
  );
}
export default CreateProduct;
