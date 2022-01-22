import React from "react"
import styles from './Content.module.css'

const Content = (props) => {
    return(
        <div>
            <span className={styles.Content}>{props.text}</span>
        </div>
    )
}

export default Content