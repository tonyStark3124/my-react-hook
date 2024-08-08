import React from 'react'
import classes from './project.module.css'

const KeyBord = ({allKeys,setScreen}) => {
   
    
  return (
    <div className={classes.keyBord}>
        {allKeys.map((element,index) => <button key={index} 
        onClick={()=>{setScreen(element)}} className={classes.undo}>{element}</button>)}
        <br />
        <button className={classes.undo} onClick={()=>{setScreen(" ")}}>delete</button>
        <button className={classes.space}  onClick={()=>{setScreen('DELL')}}>space</button>
        <button className={classes.undo} onClick={()=>{setScreen('UNDO')}}>undo last</button>
        <button className={classes.undo} onClick={()=>{setScreen(["\n"])}}>enter</button>

    </div>
  )
}

export default KeyBord