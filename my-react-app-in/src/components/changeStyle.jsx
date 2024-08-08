import React, { useState } from 'react'
import classes from './project.module.css'

let hebrow = false;
let apperCase = false;
const ChangeStyle = ({changeStyleColor,changeStyleSize,setAllKeysFromButton,correntColor,correntSize}) => {
    const [color,setColor] = useState(correntColor);
  return (
    <div className={classes.parentContainer} >
      <div className={classes.box1}>
      <button className={classes.colors} disabled={color===0}  onClick={()=>{setColor(0);changeStyleColor(0)}} style={{ color:'black'}}>⬛️</button>
        <button  className={classes.colors} disabled={color===1} onClick={()=>{setColor(1);changeStyleColor(1)}} style={{ color:'red'}}>🟥</button>
        </div>
        <div  className={classes.box2}>
        <button  className={classes.colors} disabled={color===2} onClick={()=>{setColor(2);changeStyleColor(2)}} style={{ color:'green'}}>🟩</button>
        <button  className={classes.colors} disabled={color===3} onClick={()=>{setColor(3);changeStyleColor(3)}} style={{ color:'blue'}}>🟦</button>
        </div>
          
        
        <button className={classes.size}  onClick={()=>{changeStyleSize(0)}}>12</button>
        <button className={classes.size} onClick={()=>{changeStyleSize(1)}}>18</button>
        <button className={classes.size} onClick={()=>{changeStyleSize(2)}}>24</button>
        <button className={classes.size} onClick={()=>{changeStyleSize(3)}}>30</button>
       
        <button className={classes.EH} disabled= {!hebrow} onClick={()=>{hebrow=false;setAllKeysFromButton(hebrow,apperCase)}}>english</button>
        <button className={classes.EH} disabled= {hebrow}    onClick={()=>{hebrow=true;setAllKeysFromButton(hebrow,apperCase)}}>hebrow</button>
        <button className={classes.EH} disabled= {apperCase} onClick={()=>{apperCase=true;setAllKeysFromButton(hebrow,apperCase)}}>apper case</button>
        <button className={classes.EH} disabled= {(!apperCase)} onClick={()=>{apperCase=false;setAllKeysFromButton(hebrow,apperCase)}}>lower case</button>
    </div>
  )
}

export default ChangeStyle