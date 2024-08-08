import React, { useState } from "react";
import Gamer from "./component2/Gamer";
localStorage.setItem("allGamers",JSON.stringify({ 
    name:'name',
    password:'password',      
    inGame:true,
    scores:[],
}))
const GetTo100 = () => {
    const [allGamers,setAllGamers] = useState(getFromStorege());

    function getFromStorege() {
        let storege = localStorage.getItem("allGamers");
        let allGamers1 = []
        for (const key in storege) {
            allGamers1.push(storege.key);
        }
        return allGamers1;
    }

    function saveGamers() {
        let name = document.querySelector('.newName');
        let password = document.querySelector('.newPassword');
        let storege = localStorage.getItem("allGamers");
        storege[`${name}`] = { 
            name:name,
            password:password,      
            inGame:true,
            scores:[],
        }
        localStorage.setItem("allGamers",storege);
        setAllGamers(getFromStorege())
    };

  return (
    <div>
        <input type="text" placeholder="your name" className="newName"/>
        <input type="password" placeholder="password" className="newPassword"/>
        {allGamers&&allGamers.map(item => <Gamer gamer={item} />)}
    </div>
  );
};

export default GetTo100;
