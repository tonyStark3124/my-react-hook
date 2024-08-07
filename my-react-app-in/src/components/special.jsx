import React from 'react'

const Special = ({special}) => {
  return (
    <div>
      <button onClick={()=>{special('clear')}}>clear all</button>
      <button onClick={()=>{special('lower')}}>lower all</button>
      <button onClick={()=>{special('upper')}}>upper all</button>
    </div>
  )
}

export default Special
