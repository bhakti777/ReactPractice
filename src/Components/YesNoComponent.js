import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';


const YesNoComponent=()=>{

const [button,setButton]=useState("")

const onYesClick=()=>{
    setButton("YES")
    console.log({button})
}

const onNoClick=()=>{
    setButton("NO")
    console.log({button})
}

    return(
         <div style={{marginTop:"10%",marginLeft:"45%"}}>
    <Button onClick={onYesClick}>Yes</Button>
    <Button onClick={onNoClick}>No</Button>
    </div>
    );
}

export default YesNoComponent;