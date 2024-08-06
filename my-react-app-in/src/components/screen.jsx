import classes from './project.module.css'

import React from 'react'

const Screen = ({screenChars}) => {
  return (
    <div className={classes.screen}>
      {screenChars}
    </div>
  )
}

export default Screen
