//Formulario para Criacao do Produto, chamdo pelo bortao Quero Vender
import axios from "axios";
import { useEffect, useState } from "react";

function CreateProduct() {
  const [imageForm, setImageForm] = useState({
    image1: "",
    image2: "",
    image3: "",
  });

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 0,
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
    try {
      await axios.post("https://ironrest.herokuapp.com/2hands", form);
    } catch (error) {
      console.log(error);
    }
  }

  function imagesHandleChange(e) {
    setImageForm({ ...imageForm, [e.target.name]: e.target.value });
    setForm({
      ...form,
      img_url: [imageForm.image1, imageForm.image2, imageForm.image3],
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Nome do Produto </label>
        <input
          value={form.name}
          name="name"
          type="string"
          onChange={handleChange}
          required
        />
        <label> Descricao do Produto </label>
        <input
          value={form.description}
          name="description"
          type="string"
          onChange={handleChange}
          required
        />

        <label> Preço do Produto </label>
        <input
          value={form.price}
          name="price"
          type="string"
          onChange={handleChange}
        />

        <form>
          <label> Insira a imagem 1 </label>
          <input
            placeholder="imagem URL"
            name="image1"
            value={imageForm.image1}
            type="string"
            onChange={imagesHandleChange}
          />

          <label> Insira a imagem 2 </label>
          <input
            placeholder="imagem URL"
            name="image2"
            value={imageForm.image2}
            type="string"
            onChange={imagesHandleChange}
          />

          <label> Insira a imagem 3 </label>
          <input
            placeholder="imagem URL"
            name="image3"
            value={imageForm.image3}
            type="string"
            onChange={imagesHandleChange}
          />
        </form>

        <label> Nome do Vendedor </label>
        <input
          value={form.seller}
          name="seller"
          type="string"
          onChange={handleChange}
          required
        />

        <label> Telefone de Contato </label>
        <input
          value={form.tel_seller}
          name="tel_seller"
          type="string"
          onChange={handleChange}
          required
        />

        <label> Email do Vendedor </label>
        <input
          value={form.email_seller}
          name="email_seller"
          type="string"
          onChange={handleChange}
        />

        <label> Categoria do Produto </label>
        <select name="category" onChange={handleChange} required>
          <option value="Autos e peças">Autos e peças</option>
          <option value="Para Casa">Para Casa</option>
          <option value="Eletronicos e Celulares">
            Eletronicos e Celulares
          </option>
          <option value="Esporte e Lazer">Esporte e Lazer</option>
          <option value="Moda e Beleza">Moda e Beleza</option>
        </select>

        <button
          className="btn btn-warning mt-3"
          type="submit"
          onClick={imagesHandleChange}
        >
          Incluir Produto a Venda!
        </button>
      </form>
    </div>
  );
}
export default CreateProduct;
