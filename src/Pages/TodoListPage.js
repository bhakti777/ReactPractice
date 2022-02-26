import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";

import ListComponent from "../Components/ListComponent";

const ToDoListPage= () => {

   const [ToDoList,setToDoList]=useState(["Learn React useState"]);

   const AddTodoItem=()=>{
      const newToDoItem=document.querySelector("#textval").value
      setToDoList([...ToDoList,newToDoItem])
   }

   console.log("TodoList =>", ToDoList);


  return (
    <>
      <Container fluid className="Container">
        <Row>
          <Col xs={11}>
            <InputGroup className="mb-3">
              <DropdownButton
                variant="outline-secondary"
                title="Collections"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">Home</Dropdown.Item>
                <Dropdown.Item href="#">Personal</Dropdown.Item>
                <Dropdown.Item href="#">Work</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Other</Dropdown.Item>
              </DropdownButton>
              <FormControl id="textval"
                aria-label="Text input with dropdown button"
                placeholder="Write your new task here..."
              />
            </InputGroup>
          </Col>

          <Col xs={1}>
            <Button variant="outline-dark" onClick={AddTodoItem}>Add</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <ListGroup className="Margin-Top">
               {ToDoList.map((todoItem)=>{
                 return <ListComponent title={todoItem}/>
               })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ToDoListPage;
