import React from 'react'
import classes from './counter.module.css'

const Counter2 = ({counter,num,setCounter}) => {
  return (
    <div className={classes.counter}>
      <p >counter of {num}</p><hr className={classes.hr}/>
      
      <button onClick={()=>{setCounter(counter+num)}}>+</button>
      <button onClick={()=>{setCounter(counter-num)}}>-</button>
    </div>
  )
}

export default Counter2