import React from 'react'
import '../../../media/CSS/sip.css';
import Sip from './sip';
import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid ,Tooltip,Legend } from "recharts";

export default function Result(props) {
    const [isGraph, setIsGraph] = useState(true);
    function changeState() {
      setIsGraph(false);
    }
    const data= props.graphData;
    
  return (
      <>
      {isGraph === true && (
   <div>
    <div className='main'>
       <div>
        <h4 className='tagform'>Amounts(Rs.)</h4>
         <h4 className='tagfor'>Periods in Years</h4>
         <h3 className='tagforrm'>Growth Chart</h3>
       
       </div>
     {/* Chart */}
        <div className='main1'>
          {
         
        <AreaChart className='chart' width={800} height={350} data={data}  margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}>

      <CartesianGrid />
      <XAxis  />
      
      <Area
        type="monotone"
        dataKey="years"
        stackId="1"
        stroke="black"
        fill="black"
      />
      <YAxis />
      <Tooltip  />
      <Legend verticalAlign="top" height={36}/>
        <Area 
        type="monotone" 
        name="Total Investment"
        dataKey="investment"
        stackId="1" 
        stroke="blue" 
        fill="blue" />
      
        <Area
        
        type="monotone"
        name='Total Return'
        dataKey="return"
        stackId="2"
        stroke="green"
        fill="green"
      />
    </AreaChart>
      }
     {/* Result Section */}
        </div>
        <div className='main2'>
            <h3 className='reshead'>Result</h3>
            <h4>If you invest Rs.{props.invested} per month for a period of {props.period} years, You can create wealth equivalent to Rs.{props.finalVal} </h4>
            <h6>Note: Based on Monthly compounding</h6>
        </div>
        <div className='main3'>
          <button className='button2' onClick={changeState}>ReCalculate </button>
        </div>
    </div>
    </div>
      )}
       {isGraph === false && (
        <div>
          <Sip/>
        </div>
      )}
</>
  )
}
