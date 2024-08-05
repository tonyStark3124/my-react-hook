

import React from 'react'
import classes from './counter.module.css'



const Counter2 = ({counter,num,setCounter}) => {
  return (
    <div className ={classes.counter}>
      <p className ={classes.two}> {num}</p><hr className={classes.hr}/>
      <button className ={classes.btn} onClick={()=>{setCounter(counter+num)}}> + </button>
      <button className ={classes.btn} onClick={()=>{setCounter(counter-num)}}> - </button>
    </div>
  )
}

export default Counter2