import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditeForm({ form, setForm, productId, showForm, setShowForm }) {
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
    <>
      <button onClick={() => setShowForm(!showForm)}>
        Cancelar alterações no produto
      </button>
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
        <label>Nome do vendedor</label>
        <input
          name="seller"
          value={form.seller}
          onChange={handleChange}
        ></input>
        <label>Telefone do vendedor</label>
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
        <label>Tipo de produto: </label>
        <select
          name="category"
          defaultValue={form.category}
          onChange={handleChange}
        >
          <option value="Autos e peças">Autos e pecas</option>
          <option value="Para Casa">Para casa</option>
          <option value="Eletronicos e celulares">
            Eletronicos e celulares
          </option>
          <option value="Esporte e lazer">Esporte e lazer</option>
          <option value="Moda e beleza">Moda e beleza</option>
        </select>
        <label>Edite a imagem 1</label>

        <input
          name="image1"
          value={imgsForm.image1}
          onChange={handleChangeImage}
        ></input>
        <label>Edite a imagem 2</label>
        <input
          name="image2"
          value={imgsForm.image2}
          onChange={handleChangeImage}
        ></input>
        <label>Edite a imagem 3</label>
        <input
          name="image3"
          value={imgsForm.image3}
          onChange={handleChangeImage}
        ></input>
        <button type="submit" onClick={handleChangeImage}>
          Salvar alterações
        </button>
      </form>
    </>
  );
}
export default EditeForm;
