import React from 'react'
import classes from './counter.module.css'
import { useState } from 'react'

const Counter = ({num,changeCounter}) => {
    
    const [counter,setCounter] = useState(num);

  return (

    <div className={classes.counter}>
      <p >counter of {num}</p><hr className={classes.hr}/>
      <h2><strong>{counter}</strong></h2>
      <button onClick={()=>{setCounter(counter+num)}}>+</button>
      <button disabled={counter===num} onClick={()=>{setCounter(counter+num-counter)}}>reset</button>
      <button onClick={()=>{changeCounter(counter,-num,setCounter)}}>-</button>
    </div>
  )
}

export default Counter
