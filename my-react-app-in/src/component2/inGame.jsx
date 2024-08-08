import React, { useReducer } from 'react'
import classes from './game.module.css'



const InGame = ({startGame,setStartGame}) => {

    const [,forc]=useReducer((x)=> x+1,0);

    function button(update) {
        startGame.number = Math.abs(update)===1? startGame.number+=update:Math.floor(startGame.number*update);
        startGame.steps++;
        setStartGame(startGame);
        forc();
    };
    
  return (
    <div>
        <h2>your number : {startGame.number}</h2>
        <h2>your steps : {startGame.steps}</h2>
      <button disabled={(!startGame.turn)} className={classes.set} onClick={()=>{button(1)}}>+1</button>
      <button disabled={(!startGame.turn)} className={classes.set} onClick={()=>{button(-1)}}>-1</button>
      <button disabled={(!startGame.turn)} className={classes.set} onClick={()=>{button(2)}}>*2</button>
      <button disabled={(!startGame.turn)} className={classes.set} onClick={()=>{button(0.5)}}>/2</button>
    </div>
  )
}

export default InGame;
