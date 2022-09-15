import logo from "../../assets/2HandsLogo.png";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

export function Navbar() {
  return (
    <>
      <Row responsive="sm">
        <nav className={styles.navbar2}>
          <Col className="col-3">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                style={{ margin: "20px", width: "80px" }}
              />
            </Link>
          </Col>

          <Col className="col-2">
            <Link to="/CreateProduct">
              <Button variant="warning" onClick="CreateProduct">
                Quero Vender
              </Button>
            </Link>
          </Col>
        </nav>
      </Row>
    </>
  );
}
export default Navbar;
