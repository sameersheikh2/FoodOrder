import React from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom';


const Backdrop = props =>{
    return <div className={classes.backdrop} onClick={props.onClick}/>
}

const Overlays = props =>{
    return <div className={classes.modal} >
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
  return (
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>,portalElement)}
        {ReactDOM.createPortal(<Overlays>{props.children}</Overlays>,portalElement)}
    </React.Fragment>
  )
}

export default Modal