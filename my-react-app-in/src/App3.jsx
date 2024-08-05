import React from 'react'
import Counter from './components/counter'
import './App.css';



const App3 = () => {
    function changeCounter(counter,num,setCounter) {
        let par = counter+num;
        setCounter(par);
    }
  return (
    <div className='flex'>
      <p className='po'><strong>תרגיל מס' 1</strong></p>
        <Counter num={88} changeCounter={changeCounter}/>
        <Counter num={7} changeCounter={changeCounter}/>
        <Counter num={1} changeCounter={changeCounter}/>
    </div>
  )
}

export default App3
