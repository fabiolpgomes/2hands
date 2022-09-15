import axios from "axios";
import { useState, useEffect } from "react";

import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Banner from "../../components/Banner";
import CardsCarrosel from "../../components/CardsCarrosel";

function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "80%" }}>
      <Banner />

      <div style={{ marginTop: "160px", alignSelf: "center" }}>
        <Link style={{ margin: "auto" }} to="/allProducts">
          <Button>Conferir os produtos disponíveis</Button>
        </Link>
        <CardsCarrosel />
      </div>
    </div>
  );
}

export default HomePage;
