import React from 'react'
import classes from './project.module.css'

const KeyBord = ({allKeys,setScreen}) => {
   
    
  return (
    <div className={classes.keyBord}>
        {allKeys.map((element,index) => <button key={index} onClick={()=>{setScreen(element)}}>{element}</button>)}

        <button onClick={()=>{setScreen(" ")}}>space</button>
        <button onClick={()=>{setScreen('DELL')}}>delete</button>
        <button onClick={()=>{setScreen('UNDO')}}>undo last</button>

    </div>
  )
}

export default KeyBord