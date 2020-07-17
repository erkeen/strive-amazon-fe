import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3456/products")
      .then((response) => response.json())
      .then((responseObject) => this.setState({ products: responseObject }))
      .catch((err) => {
        this.setState({ error: true });
        console.log("An error has occurred:", err);
      });
  };
  render() {
    console.log(this.state.products);
    return (
      <Container>
        <Row>
          {this.state.products.map((product) => (
            <Col xs="4">
              <Link to={"/details/" + product._id}>
                <Image src={product.image_url} className="image-fluid" />
              </Link>
              <h6>{product.name}</h6>
              <p>{product.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
