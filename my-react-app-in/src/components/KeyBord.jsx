import React from 'react'
import classes from './project.module.css'

const KeyBord = ({allKeys,setScreen}) => {
   
    
  return (
    <div className={classes.keyBord}>
        {allKeys.map((element,index) => <button key={index} onClick={()=>{setScreen(element)}}>{element}</button>)}
        <br />
        <button className={classes.space} onClick={()=>{setScreen(" ")}}>space</button>
        <br />
        <button onClick={()=>{setScreen('DELL')}}>delete</button>
        <button onClick={()=>{setScreen('UNDO')}}>undo last</button>
        <button onClick={()=>{setScreen(["\n"])}}>enter</button>

    </div>
  )
}

export default KeyBord