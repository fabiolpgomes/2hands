import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Banner from "../../components/Banner";
import CardsCarrosel from "../../components/CardsCarrosel";

function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "80%" }}>
      <div style={{ marginTop: "120px" }}>
        <Banner />
      </div>

      <div style={{ marginTop: "160px", alignSelf: "center" }}>
        <Link style={{ margin: "auto" }} to="/allProducts">
          <Button size="lg">Conferir os produtos disponíveis</Button>
        </Link>
        <CardsCarrosel />
      </div>
    </div>
  );
}

export default HomePage;
