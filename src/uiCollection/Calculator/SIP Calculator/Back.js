import React from 'react';
import '../../../media/CSS/sip.css';
import { useState } from "react";
import First from './first.js';
import Sip from './sip.js'



export default function Back() {
    const [isBack, setIsBack] = useState(true);
    function changeState() {
      setIsBack(false);
    }
  return (
     <>
      {isBack === true && (
    <div>
    <div className='heading'> 
    <h3>SIP Calculator </h3> 
</div>
<div >
   <button className='back' onClick={changeState}  >⬅ Back</button>
   
</div>
<Sip/>

</div>

  )}
  {
      isBack=== false &&(
          <div>
              <First/>
          </div>
      )
  }

</>
  )
}
