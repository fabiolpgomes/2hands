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
    <div className="container">
      <div className="carousel" ref={carrousel}>
        {itemsParaVenda.map((item) => {
          return (
            <div className="item" key={item._id}>
              <div className="image">
                <img src={item.img_url[0]} alt="produto" />
              </div>
              <Link to={`/allProducts/${item._id}`}>
                <div className="info">
                  <span className="name">{item.name}</span>
                  <span className="price">R$ {item.price}</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={hadleLeftClick}>
          <img src={seta} />
        </button>
        <button onClick={handleRightClick}>
          <img src={seta} />
        </button>
      </div>
    </div>
  );
}
export default CardsCarrosel;
