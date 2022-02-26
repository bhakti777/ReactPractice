import React, { useState } from "react";
import { Fragment } from "react";
import InputGroup from 'react-bootstrap/inputGroup';
import FormControl from "react-bootstrap/FormControl";


const LearningUseState = () => {

const [name,setName]=useState(['Sanika'])

const ChangeName=(event)=>{
      console.log("On Change is getting Called",event.target.value)
      setName(event.target.value)
}

  return (
    <Fragment>
      <InputGroup className="mb-3">
        <FormControl
          id="username"
          onChange={ChangeName}
          value={name} 
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </InputGroup>

      My Name is {name} <br></br>

    </Fragment>
  );
};
export default LearningUseState;