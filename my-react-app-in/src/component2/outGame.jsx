import React from 'react'
import classes from './game.module.css'


const OutGame = () => {
  return (
    <div>
        <button className={classes.out}>new game</button>
        <button className={classes.out}>quit</button>
    </div>
  )
}

export default OutGame;