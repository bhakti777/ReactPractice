import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Button, CloseButton } from "react-bootstrap";
import { Form } from "react-bootstrap";

const ToDoList = (props) => {
  return (
    <>
      <Container className="section">
        <div className="Header">
          <h1>
            <i src="Components\todoicon.jpg"></i>To-Do List
          </h1>
        </div>

        <Row className="title">
          <Col md={1}></Col>
          <Col md={7}>
            <Form.Control size="lg" type="text" placeholder="Title" />
          </Col>

          <Col md={3}>
            <Button variant="success">ADD</Button>
            {""}
          </Col>
          <Col md={1}></Col>
        </Row>

        <Row className="items">
          <Col md={1}></Col>
          <Col md={7}>
            <Form.Control size="lg" type="text" placeholder="List Item..." />
          </Col>
          <Col md={3}>
            <CloseButton />
          </Col>
          <Col md={1}></Col>
        </Row>

        <Row className="items">
          <Col md={1}></Col>
          <Col md={7}>
            <Form.Control size="lg" type="text" placeholder="List Item..." />
          </Col>
          <Col md={3}>
            <CloseButton />
          </Col>
          <Col md={1}></Col>
        </Row>

        <Row className="items">
          <Col md={1}></Col>
          <Col md={7}>
            <Form.Control size="lg" type="text" placeholder="List Item..." />
          </Col>
          <Col md={3}>
            <CloseButton />
          </Col>
          <Col md={1}></Col>
        </Row>

        <Row className="items">
          <Col md={1}></Col>
          <Col md={7}>
            <Form.Control size="lg" type="text" placeholder="List Item..." />
          </Col>
          <Col md={3}>
            <CloseButton />
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
};

export default ToDoList;
