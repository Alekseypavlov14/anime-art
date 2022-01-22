import React from 'react'
import Title from './Title'
import styles from './Header.module.css'
import Burger from './Burger'

const Header = (props) => {
    return (
        <header className={styles.Header}>
            <Title text="Art"/>
            <Burger onClick={props.onClick}/>
        </header>
    )
}

export default Header