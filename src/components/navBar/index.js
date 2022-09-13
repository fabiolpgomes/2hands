import logo from "../../assets/2Hands1.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

export function Navbar() {
  return (
    <>
      <nav className={styles.navbar2}>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={{ margin: "20px", width: "80px" }}
          />
        </Link>
        <Link to="/CreateProduct">
          <Button variant="warning">Quero Vender</Button>
        </Link>
      </nav>
    </>
  );
}
