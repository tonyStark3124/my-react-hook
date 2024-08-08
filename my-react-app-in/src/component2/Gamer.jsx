import React, { useState } from "react";
import classes from "./game.module.css";
import OutGame from "./outGame";
import InGame from "./inGame";



const Gamer = ({gamer}) => {
    const [startGame,setStartGame] = useState({        
        number : Math.floor(Math.random()*99),
        steps : 0,
        turn : true,
    });

    return (
    <div>
        <h1>hello {gamer.name}</h1>
        {gamer.inGame ? <InGame startGame={startGame} setStartGame={setStartGame}/>:<OutGame/>}
        <h3>all your scors : {gamer.scores.map(element => ` ${element}`)}</h3>
    </div>
  );
};
export default Gamer;
