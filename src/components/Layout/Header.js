import React from 'react'
import Meals from '../../assets/meals.jpg'
import classes from './Header.module.css'

const Header = () => {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>Meals</h1>
            <button>Cart</button>
        </header>
            <div className={classes['main-image']}>
                <img src={Meals} alt='food on table'/>
            </div>
    </React.Fragment>
  )
}

export default Header