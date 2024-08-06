import React, { useState } from 'react'
import classes from './components/project.module.css'
import Screen from './components/screen'
import KeyBord from './components/KeyBord';
import ChangeStyle from './components/changeStyle';

const color = ['black','red','green','blue'];
const fontSize = [12,18,24,30];
let correntColor = 3;
let correntSize = 3;
let allMooves = [[]];
let keyCounter = 0;


const AppProject = () => {

  const [screenChars,setScreenChars] = useState([]);
  const [allKeys,setAllKeys] = useState(changeAllKeys(false,false));
  
     
  function saveMoove() {    
    allMooves.push(screenChars);
  }

  function undo() {
    let back = allMooves[allMooves.length-1];
    if(!back){     
      setScreen([]);
    }else{
      allMooves.pop();
      setScreenChars(back);
    }
  }

  function setAllKeysFromButton(hebrow,apperCase) {
    setAllKeys(changeAllKeys(hebrow,apperCase));
  }

  function changeAllKeys(hebrow,apperCase){
    let allKeysSet = ['/',"'"];
    let start = hebrow?'א':apperCase?'A':'a';
    let and = hebrow?'ת':apperCase?'Z':'z';
   
    for (let index = start.codePointAt(0); index <= and.codePointAt(0); index++) {
      allKeysSet.push(`${String.fromCodePoint(index)}`);
    }
    allKeysSet.push('.');
    return allKeysSet;
  }

  function setScreen(span) {
    switch (span) {
      case 'DELL':
        screenChars.pop()
        setScreenChars([...screenChars]);
        break;
      case 'UNDO':
        undo();
        return;
      default:
        screenChars.push(<span key={keyCounter} style={{color:color[correntColor], fontSize:fontSize[correntSize]}}>{span}</span>);
        setScreenChars([...screenChars]);
        keyCounter++;
        break;
    }
    saveMoove();
  }    

  function changeStyleColor(color) {
    correntColor = color;
  }
  function changeStyleSize(size) {
    correntSize = size;
  }


  return (
    <div className={classes.appProject}>   
      <Screen screenChars={screenChars} saveMoove={saveMoove}/>
      <KeyBord allKeys={allKeys} setScreen={setScreen}/>
      <ChangeStyle changeStyleColor={changeStyleColor} changeStyleSize={changeStyleSize} setAllKeysFromButton={setAllKeysFromButton}/>
    </div>
  )   
}     
          
export default AppProject
