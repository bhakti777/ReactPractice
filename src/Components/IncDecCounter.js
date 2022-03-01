import React, { Fragment,useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const IncDecCounter = () => {

const [number,setNumber]=useState(0);

const IncNum=()=>{
    if(number<10){
        setNumber(number+1)
    }
}

const DecNum=()=>{
     if(number>0){
         setNumber(number-1)
     }
}

const handleChange=(num)=>{
      setNumber(num.target.value)
}

  return (
    <Fragment>
      <Container fluid className="Container-IncDec">
        <Row className="justify-content-md-center">
          
          <Col md="auto">
            <Button variant="info" onClick={DecNum}>-</Button>
            <input type="text" style={{ width:"40px",height:"35px",textAlign:"center" }} value={number} onChange={handleChange} />
            <Button variant="info" onClick={IncNum}>+</Button>
          </Col>
        
        </Row>
      </Container>
    </Fragment>
  );
};

export default IncDecCounter;
