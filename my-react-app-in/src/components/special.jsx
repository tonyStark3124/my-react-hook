import React from 'react'
import classes from './project.module.css'

const Special = ({special}) => {
  return (
    <div>
      <button className={classes.all} onClick={()=>{special('clear')}}>clear all</button>
      <button className={classes.all} onClick={()=>{special('lower')}}>lower all</button>
      <button className={classes.all} onClick={()=>{special('upper')}}>upper all</button>
    </div>
  )
}

export default Special
