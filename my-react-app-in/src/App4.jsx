import React, { useState } from 'react'
import Counter2 from './components/counter2';





const App4 = () => {
    const [counter,setCounter] = useState(0);
    let allConters = [];
    for(let index = 1; index < 10; index++) {
            allConters[index] = <Counter2 num={index} setCounter={setCounter} counter={counter}/>
        }

  return (
    <div >
        <h2><strong>{counter}</strong></h2>
        <div className='rrr'>
        {allConters}
        </div>
        <button disabled={counter===0} onClick={()=>{setCounter(0)}}>reset</button>

    </div>
  )
}

export default App4