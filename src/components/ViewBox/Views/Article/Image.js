import React from 'react'
import styles from './Image.module.css'

const Image = (props) => {
    return(
        <div>
            <img className={styles.Image} src={props.src} />
        </div>
    )
} 

export default Image