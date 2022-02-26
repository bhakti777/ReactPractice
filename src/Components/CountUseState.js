import React,{useState} from 'react';
 
const CountUseState=()=>{

    const [count,setCount]=useState(0)
    

    return <div>
        <h2>You clicked {count} times...</h2>
        <button onClick={()=>setCount(count+1)}>update count</button>
    </div>
}

export default CountUseState;