import classes from './project.module.css'

import React from 'react'

const Screen = ({screenChars,upper}) => {
  return (
    <div className={classes.screen}>
      {screenChars}
    </div>
  )
}

export default Screen
