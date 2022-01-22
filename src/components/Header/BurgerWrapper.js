import React, { useContext, useState } from "react"
import styles from './BurgerWrapper.module.css'
import StateContext from "../../context"

const BurgerWrapper = (props) => {
    const {view, setView} = useContext(StateContext)

    const Links = [
        'Ideas',
        'About'
    ]
    return (
        <div className={props.pos ? styles.active : styles.passive}>

            <div className={styles.ButtonContainer}>
                <img src='./logo/close.png' className={styles.Close} onClick={props.onClose} />
            </div>

            {Links.map((Link, index) => (
                <div 
                    className={styles.Link} 
                    onClick={() => {
                        setView(index)
                        props.onClose()
                    }} 
                    key={index} 
                >
                    {Link}  
                </div>
            ))}
        </div>
    )
}

export default BurgerWrapper