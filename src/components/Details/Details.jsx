import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
class Details extends Component {
  state = {
    data: null,
    name: null,
    description: null,
    imageUrl: null,
    brand: null,
    price: null,
    comment: null,
  };

  fetchData = (id) => {
    fetch("http://localhost:3456/products/" + id)
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          data: response,
          name: response.name,
          description: response.description,
          imageUrl: response.image_url,
          brand: response.brand,
          price: response.price,
          comment: response.comment,
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };

  fetchComment = (id) => {
    fetch("http://localhost:3456/reviews/" + id)
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          comment: response.comment,
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchData(this.props.match.params.id);
    console.log(this.props.match.params.id);
    this.fetchComment(this.props.match.params.id);
  }

  // handleEdit = (id) => {
  //   const res = fetch("http://localhost:3456/students/" + id, {
  //     method: "PUT",
  //     body: JSON.stringify(this.state.student),
  //     headers: new Headers({ "content-type": "application/json" }),
  //   });
  //   if (res.ok) {
  //   }
  // };

  render() {
    console.log(this.state.data);
    return (
      <Container>
        <Row>
          <Col>
            <Image src={this.state.imageUrl} />
            <h2>{this.state.name}</h2>
          </Col>
          <Col>
            <h2>{this.state.brand}</h2>
            <p>{this.state.description}</p>
            <h3>{this.state.price} $</h3>
          </Col>

          <Col>
            <Button className="mx-3">Edit</Button>
            <Button>Delete</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{this.state.comment}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Details;
