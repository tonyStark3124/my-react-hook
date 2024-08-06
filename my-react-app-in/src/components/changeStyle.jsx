import React from 'react'
import classes from './project.module.css'

let hebrow = false;
let apperCase = false;
const ChangeStyle = ({changeStyleColor,changeStyleSize,setAllKeysFromButton}) => {
    
  return (
    <div>
        <button onClick={()=>{changeStyleColor(0)}}>black</button><button onClick={()=>{changeStyleColor(1)}}>red</button>
        <button onClick={()=>{changeStyleColor(2)}}>green</button><button onClick={()=>{changeStyleColor(3)}}>blue</button>
        <button onClick={()=>{changeStyleSize(0)}}>12</button><button onClick={()=>{changeStyleSize(1)}}>18</button>
        <button onClick={()=>{changeStyleSize(2)}}>24</button><button onClick={()=>{changeStyleSize(3)}}>30</button>
        <br />
        <button onClick={()=>{hebrow=false;setAllKeysFromButton(hebrow,apperCase)}}>english</button>
        <button onClick={()=>{hebrow=true;setAllKeysFromButton(hebrow,apperCase)}}>hebrow</button>
        <button onClick={()=>{apperCase=true;setAllKeysFromButton(hebrow,apperCase)}}>apper case</button>
        <button onClick={()=>{apperCase=false;setAllKeysFromButton(hebrow,apperCase)}}>lower case</button>
    </div>
  )
}

export default ChangeStyle