import React, { useState } from 'react'
import css from "./counter/Counter.css";

const Counter = () => {
    const [Count,Setcount]=useState(0);
    const handleincrement=()=>{
        Setcount(Count+1)
    }
    const handledecrement=()=>{
        Setcount(Count-1)
    }
  return (
    <div><h1 style={{textAlign:'center'}} >Counter app </h1>
    <div className="main">
    <h2>Counter:{Count}</h2>
    <br></br>
    <button onClick={handleincrement} >increment</button>
    <button onClick={handledecrement} >decrement</button>
    <h5>Please Click Increment or Decrement </h5>
   
    </div>
  
    </div>

  )
}

export default Counter