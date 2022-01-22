import React, { useState } from 'react'
import styles from './Burger.module.css'
import BurgerWrapper from './BurgerWrapper'

const Burger = (props) => {
    const [pos, setPos] = useState(false)
    return (
        <div>
            <img
                src='./logo/burger.png'
                className={styles.Burger}
                onClick={() => setPos(!pos)}
            />
            <BurgerWrapper 
                pos={pos} 
                onClose={() => setPos(!pos)}
            />
        </div>
    )
}

export default Burger