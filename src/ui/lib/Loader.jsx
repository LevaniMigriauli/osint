import React from 'react'
import classes from './Loader.module.scss'

const Loader = ({ color = '#993DCF', fullScreen = true }) => {
  return (
    <div className={`${classes['loader-overlay']} ${fullScreen
      ? classes.active
      : ''}`}>
      <div
        className={classes.loader}
        style={{
          borderTopColor: color
        }}
      ></div>
    </div>
  )
}

export default Loader
