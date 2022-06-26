import React from 'react'
import Meals from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>Meals</h1>
            <HeaderCartButton/>
        </header>
            <div className={classes['main-image']}>
                <img src={Meals} alt='food on table'/>
            </div>
    </React.Fragment>
  )
}

export default Header