import React from "react"
import styles from './Title.module.css'

const Title = (props) => {
    return (
        <div>
            <span className={styles.Title}>{props.text}</span>
        </div>
    )
}

export default Title