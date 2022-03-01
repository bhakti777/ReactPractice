import React, { useState } from "react";

const BooleanUpdate = () => {
  const [readMore, setreadMore] = useState(false)

  const extraText=<p>This is extra Text*******</p>

  const linkName=readMore ? "readLess" : "readMore"

  return (
    <div>
      <h2>React Hook Example: useState()</h2>
      <h4>Initial Text:</h4>
      <p>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat
        nullam tortor quis elit lacus blandit vitae. Nostra dapibus bibendum;
        curae magnis commodo metus vestibulum tristique. Tristique volutpat
        consectetur congue lorem pharetra habitant.
        
       {readMore?extraText:null}
      
      <a onClick={()=>setreadMore(!readMore)} style={{color:"blue",textDecoration:"underline",cursor:"pointer"}}>{linkName}</a>
    </p>
    </div>
  );
};

export default BooleanUpdate;
