import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import seta from "../../assets/216151_right_chevron_icon.png";

function CardsCarrosel() {
  const [itemsParaVenda, setItems2hands] = useState([]);
  const carrousel = useRef(null);
  useEffect(() => {
    async function fetchComAxios() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/2hands"
        );
        setItems2hands(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchComAxios();
  }, []);
  function hadleLeftClick(e) {
    e.preventDefault();
    carrousel.current.scrollLeft -= carrousel.current.offsetWidth - 80;
  }
  function handleRightClick(e) {
    e.preventDefault();
    carrousel.current.scrollLeft += carrousel.current.offsetWidth - 80;
  }
  console.log(itemsParaVenda);
  return (
    <div className="tudojunto">
      <div className="container teste" ref={carrousel}>
        <div className="carousel teste">
          {itemsParaVenda.map((item) => {
            return (
              <div
                className="card m-1 cartaozinho"
                style={{ width: "14rem", height: "25rem", display: "table" }}
                key={item._id}
              >
                <Link
                  to={`/allProducts/${item._id}`}
                  className="text-reset text-decoration-none"
                >
                  <img
                    src={item.img_url[0]}
                    alt="produto"
                    className="card-img-top"
                    style={{
                      minHeight: "9rem",
                      minWidth: "6rem",
                      maxHeight: "20rem",
                      maxWidth: "12rem",
                    }}
                  />
                  <div className="card-body cartaozinho">
                    <div className="card-title">{item.name}</div>
                    <div className="card-text text-muted">R$ {item.price}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ marginBottom: "100px" }} className="buttons">
        <button onClick={hadleLeftClick}>
          <img src={seta} alt="imagem" />
        </button>
        <button onClick={handleRightClick}>
          <img src={seta} alt="imagem" />
        </button>
      </div>
    </div>
  );
}
export default CardsCarrosel;
