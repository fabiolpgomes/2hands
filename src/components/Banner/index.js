import Carousel from "react-bootstrap/Carousel";
import shakinghands from "../../assets/shakingHands.jpg";
import vendendo from "../../assets/Garagem.jpg";
import carbuyng from "../../assets/Carbuyng.jpg";

function Banner() {
  return (
    <Carousel style={{ height: "300px", width: "450" }}>
      <Carousel.Item interval={1000}>
        <img
          style={{ height: "450px", width: "300" }}
          className="d-block w-100"
          alt="First slide"
          src={shakinghands}
        />
        <Carousel.Caption
          style={{
            backgroundColor: "rgba(110, 118, 144, 0.6)",
            borderRadius: "20px",
          }}
        >
          <h3
            style={{ color: "#FFCA2C", fontSize: "30px", fontWeight: "bolder" }}
          >
            Compre e venda com segurança
          </h3>
          <p
            style={{ color: "#FFCA2C", fontSize: "20px", fontWeight: "bolder" }}
          >
            A 2Hands conecta compradores e vendedores em uma plataforma segura
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          style={{ height: "450px", width: "300px" }}
          className="d-block w-100"
          alt="Second slide"
          src={carbuyng}
        />
        <Carousel.Caption
          style={{
            backgroundColor: "rgba(110, 118, 144, 0.6)",
            borderRadius: "20px",
          }}
        >
          <h3
            style={{ color: "#FFCA2C", fontSize: "30px", fontWeight: "bolder" }}
          >
            Tudo o que você procura
          </h3>
          <p
            style={{ color: "#FFCA2C", fontSize: "20px", fontWeight: "bolder" }}
          >
            Aqui na 2Hands você pode comprar desde um carro até um quadro
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "450px", width: "300" }}
          className="d-block w-100"
          alt="Third slide"
          src={vendendo}
        />
        <Carousel.Caption
          style={{
            backgroundColor: "rgba(110, 118, 144, 0.6)",
            borderRadius: "20px",
          }}
        >
          <h3
            style={{ color: "#FFCA2C", fontSize: "30px", fontWeight: "bolder" }}
          >
            Desapegue
          </h3>
          <p
            style={{ color: "#FFCA2C", fontSize: "20px", fontWeight: "bolder" }}
          >
            Se você tem algo que não usa, anuncie na 2Hands e encontre um
            comprador.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Banner;
