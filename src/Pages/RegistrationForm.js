import React, { Fragment, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";

const RegistrationForm = () => {


const[formData,setFormData]=useState({
                                        firstname:"",
                                        lastname:"",
                                        email:"",
                                        password:"",
                                        address:"",
                                        state:"",
                                        city:"",
                                        zip:""
                                    })
const handleSubmit=(submit)=>{
    submit.preventDefault()      //to stop default behaviour of loading page
    console.log({...formData})
}



  return (
    <Fragment>
      <div className="reg-bgImg">
      <Container fluid className="Container-regform">
          <h2 className="Heading">Registration Form</h2>
          
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              First Name:
              <Form.Control placeholder="First name" id="firstname" onChange={(fname)=>setFormData({...formData,firstname:fname.target.value})}/>
              {/* value={formData.firstname} -first state only empty string*/}
            </Col>
            <Col>
              Last Name:
              <Form.Control placeholder="Last name" id="lastname" onChange={(lname)=>setFormData({...formData,lastname:lname.target.value})}/>
            </Col>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="Enter email"onChange={(email)=>setFormData({...formData,email:email.target.value})} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(pswd)=>setFormData({...formData,password:pswd.target.value})}/>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address:</Form.Label>
            <Form.Control placeholder="1234 Main St"  onChange={(addr)=>setFormData({...formData,address:addr.target.value})} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2:</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City:</Form.Label>
              <Form.Control  onChange={(cityname)=>setFormData({...formData,city:cityname.target.value})} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State:</Form.Label>
              <Form.Select defaultValue="Choose..." onChange={(statename)=>setFormData({...formData,state:statename.target.value})}>
                <option>Choose...</option>
                <option>Maharashtra</option>
                <option>Gujrat</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control  onChange={(zipcode)=>setFormData({...formData,zip:zipcode.target.value})}/>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>

        </Form>
      </Container>
      </div>
    </Fragment>
  );
};

export default RegistrationForm;
