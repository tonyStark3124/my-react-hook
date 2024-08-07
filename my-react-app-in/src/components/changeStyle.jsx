import React from 'react'
import classes from './project.module.css'

let hebrow = false;
let apperCase = false;
const ChangeStyle = ({changeStyleColor,changeStyleSize,setAllKeysFromButton,correntColor,correntSize}) => {
    
  return (
    <div>
        <button disabled={correntColor===0} style={{ color:'black'}} onClick={()=>{changeStyleColor(0)}} className={classes.colors}>black</button><button  className={classes.colors} disabled={correntColor===1} onClick={()=>{changeStyleColor(1)}} style={{ color:'red'}}>red</button>
        <button  className={classes.colors} disabled={correntColor===2} onClick={()=>{changeStyleColor(2)}} style={{ color:'green'}}>green</button><button  className={classes.colors} disabled={correntColor===3} onClick={()=>{changeStyleColor(3)}} style={{ color:'blue'}}>blue</button>
        <button disabled={correntSize===0} onClick={()=>{changeStyleSize(0)}}>12</button><button disabled={correntSize===1} onClick={()=>{changeStyleSize(1)}}>18</button>
        <button disabled={correntSize===2} onClick={()=>{changeStyleSize(2)}}>24</button><button disabled={correntSize===3} onClick={()=>{changeStyleSize(3)}}>30</button>
        <br />
        <button disabled={(!hebrow)} onClick={()=>{hebrow=false;setAllKeysFromButton(hebrow,apperCase)}}>english</button>
        <button disabled={hebrow} onClick={()=>{hebrow=true;setAllKeysFromButton(hebrow,apperCase)}}>hebrow</button>
        <button disabled={apperCase || hebrow} onClick={()=>{apperCase=true;setAllKeysFromButton(hebrow,apperCase)}}>apper case</button>
        <button disabled={(!apperCase||hebrow)} onClick={()=>{apperCase=false;setAllKeysFromButton(hebrow,apperCase)}}>lower case</button>
    </div>
  )
}

export default ChangeStyle