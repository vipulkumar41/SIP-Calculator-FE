import React from 'react'
import "../../../media/CSS/first.css"
import SIP from '../../../media/images/m_SIP-Calculator.png';
import Delay from '../../../media/images/delay.png';
import Step from '../../../media/images/step.png';
import { useState } from "react";
import Back from './Back.js'

// Home Page

export default function First() {
  const [isFirst, setIsFirst] = useState(true);
  function changeState() {
    setIsFirst(false);
  }
 
  return (
    <>
    {isFirst=== true &&(
    <div className='first'>
        <div className='image1'>
           <img src={SIP} alt="cal"  height={32} width={32}/>
        </div>
        <div className='div1'>
          <div   > 
           <h3 onClick={changeState}>SIP Calculator</h3>
           
          </div>
          <p >Future projection of a SIP amount with given expected return %</p >
        </div>
        <div className='image2'>
           <img src ={Delay} alt="del"  height={32} width={32}/>
        </div>
        <div className='div2'>
            <h3>SIP Delay Calculator</h3>
            <p >Future projection if SIP installment is delayed</p >
        </div>  

        <div className='image3'>
           <img src={Step} alt="step"  height={32} width={32}/>
        </div>
        <div className='div3'>
            <h3>SIP Step up Calculator</h3>
            <p >Future projection of SIP with Yearly increment i installment amount</p >
        </div>
    </div>
    )}
    {isFirst === false&&(
      <div>
        <Back/>
      </div>
    )}

    </>
  )
}
