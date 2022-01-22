import React from "react"
import styles from './Title.module.css'

const Title = (props) => {
    return(
        <span className={styles.Title}>{props.text}</span>
    )
}

export default Title