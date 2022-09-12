import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Row, Col, Card, FormGroup } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';



function HomePage() {
    const [product, setProducts] = useState([]);

    const [search, setSearch] = useState("");
  
    useEffect(() => {
      async function fetchComAxios() {
        try {
          const response = await axios.get(
            "https://ironrest.herokuapp.com/FGProject2"
          );
          setProducts(response.data);
        } catch (error) {
          console.log(error);
        }
      }
  
      fetchComAxios();
    }, []);
  
    function handleSearch(e) {
      setSearch(e.target.value);
    }
  


    return ( 
        <div>
          <Row>
            <Col className="col-8">
                <Form.Control
                type="text"value={search}
                onChange={handleSearch}
                placeholder="Procure aqui o produto..."
                />
            </Col>
            <Col className="col-1">
                <link to=""
            <Button className="btn btn-alert" onClick={
          </Row>  
        </div>
     );
}

export default Homepage;


