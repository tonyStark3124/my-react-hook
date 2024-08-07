import React, { useState } from "react";
import classes from "./components/project.module.css";
import Screen from "./components/screen";
import KeyBord from "./components/KeyBord";
import ChangeStyle from "./components/changeStyle";
import Special from "./components/special";

const color = ["black", "red", "green", "blue"];
const fontSize = [12, 18, 24, 30];
let correntColor = 0;
let correntSize = 0;
let allMooves = [[]];
let keyCounter = 0;

const AppProject = () => {
  const [screenChars, setScreenChars] = useState([]);
  const [allKeys, setAllKeys] = useState(changeAllKeys(false, false));

  function saveMoove() {
    allMooves.push(screenChars);
  }

  function special(params) {
    switch (params) {
      case "clear":
        setScreenChars([]);
        break;
      case "lower":
        lower();
        async function lower() {
          const lowercaseItems = await screenChars.map(item =>
            React.cloneElement(item, {
              children:item.props.children.toLowerCase(),
            })
          );
          saveMoove();
          await setScreenChars(lowercaseItems);
        }

        break;
      case "upper":
        upper();
        async function upper() {
          const uppercaseItems = await screenChars.map((item) =>
            React.cloneElement(item, {
              children: item.props.children.toUpperCase(),
            })
          );
          saveMoove();
          await setScreenChars(uppercaseItems);
                }
        break;
      default:
        return;
    }
    console.log("save");
  }

  function undo() {
    console.log("screen = ", screenChars);

    console.log(allMooves);

    if (allMooves.length >= 1) {
      allMooves.length > 0 && allMooves.pop();
      setScreenChars(allMooves.pop());
      allMooves.push([]);
    }
    if (allMooves <= 0) {
      allMooves.push([]);
    }
    console.log(allMooves);
  }

  function setAllKeysFromButton(hebrow, apperCase) {
    setAllKeys(changeAllKeys(hebrow, apperCase));
  }

  function changeAllKeys(hebrow, apperCase) {
    let allKeysSet = ["/", "'"];
    let start = hebrow ? "א" : apperCase ? "A" : "a";
    let and = hebrow ? "ת" : apperCase ? "Z" : "z";

    for (
      let index = start.codePointAt(0);
      index <= and.codePointAt(0);
      index++
    ) {
      allKeysSet.push(`${String.fromCodePoint(index)}`);
    }
    allKeysSet.push(".");
    return allKeysSet;
  }

  function setScreen(span) {
    switch (span) {
      case "DELL":
        screenChars.pop();
        setScreenChars([...screenChars]);
        break;
      case "UNDO":
        undo();
        return;
      default:
        screenChars.push(
          <span
            key={keyCounter}
            style={{
              color: color[correntColor],
              fontSize: fontSize[correntSize],
            }}
          >
            {span}
          </span>
        );
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
      <Screen screenChars={screenChars} saveMoove={saveMoove} />
      <KeyBord allKeys={allKeys} setScreen={setScreen} />
      <ChangeStyle
        changeStyleColor={changeStyleColor}
        changeStyleSize={changeStyleSize}
        setAllKeysFromButton={setAllKeysFromButton}
        correntColor={correntColor}
        correntSize={correntSize}
      />
      <Special special={special} />
    </div>
  );
};

export default AppProject;

// import React, { useState } from 'react'
// import classes from './components/project.module.css'
// import Screen from './components/screen'
// import KeyBord from './components/KeyBord';
// import ChangeStyle from './components/changeStyle';
// import Special from './components/special';

// const color = ['black','red','green','blue'];
// const fontSize = [12,18,24,30];
// let correntColor = 3;
// let correntSize = 3;
// let allMooves = [];
// let keyCounter = 0;

// const AppProject = () => {
//   const [screenChars, setScreenChars] = useState([]);
//   const [allKeys, setAllKeys] = useState(changeAllKeys(false, false));
//   const [see,setSee] = useState(allMooves);

//   function special(params) {
//     if(screenChars.length){
//     switch (params) {
//       case 'clear':
//         setScreenChars([]);
//         saveMoove();
//         break;
//       case 'lower':
//         const lowercaseItems = screenChars.map(item =>
//           React.cloneElement(item, {
//             children: item.props.children.toLowerCase()
//           })
//         );
//         setScreenChars(lowercaseItems);
//         saveMoove();
//         break;
//       case 'upper':
//         const uppercaseItems = screenChars.map(item =>
//           React.cloneElement(item, {
//             children: item.props.children.toUpperCase()
//           })
//         );
//         setScreenChars(uppercaseItems);
//         saveMoove();
//         break;
//       default:
//         return;
//     }}
//   }

//   function saveMoove() {
//     // Clone the screenChars to avoid reference issues
//     allMooves.push(screenChars);
//   }

//   function undo() {
//     if (allMooves.length > 1) {

//     allMooves.pop(); // Remove the most recent move
//     const previousState = allMooves[allMooves.length - 1]; // Get the state before the last change
//     setScreenChars(previousState);
//     }
//   }

//   function setAllKeysFromButton(hebrow, apperCase) {
//     setAllKeys(changeAllKeys(hebrow, apperCase));
//   }

//   function changeAllKeys(hebrow, apperCase) {
//     let allKeysSet = ['/', "'"];
//     let start = hebrow ? 'א' : apperCase ? 'A' : 'a';
//     let and = hebrow ? 'ת' : apperCase ? 'Z' : 'z';

//     for (let index = start.codePointAt(0); index <= and.codePointAt(0); index++) {
//       allKeysSet.push(`${String.fromCodePoint(index)}`);
//     }
//     allKeysSet.push('.');
//     return allKeysSet;
//   }

//   function setScreen(span) {
//     switch (span) {
//       case 'DELL':
//         screenChars.pop();
//         setScreenChars([...screenChars]);
//         break;
//       case 'UNDO':
//         undo();
//         return;
//       default:
//         screenChars.push(
//           <span key={keyCounter} style={{ color: color[correntColor], fontSize: fontSize[correntSize] }}>
//             {span}
//           </span>
//         );
//         setScreenChars([...screenChars]);
//         keyCounter++;
//         break;
//     }

//     saveMoove();
//     setSee(allMooves);
//   }

//   function changeStyleColor(color) {
//     correntColor = color;
//   }

//   function changeStyleSize(size) {
//     correntSize = size;
//   }

//   return (
//     <div className={classes.appProject}>
//       <Screen screenChars={screenChars} saveMoove={saveMoove} />
//       <KeyBord allKeys={allKeys} setScreen={setScreen} />
//       <ChangeStyle changeStyleColor={changeStyleColor} changeStyleSize={changeStyleSize} setAllKeysFromButton={setAllKeysFromButton} />
//       <Special special={special} />
//       {see.map(element => <p>{element}</p>)}
//     </div>
//   )
// }

// export default AppProject;
