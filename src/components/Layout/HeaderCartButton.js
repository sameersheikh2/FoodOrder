import React from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon.js'

const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>2</span>
    </button>
  )
}

export default HeaderCartButton