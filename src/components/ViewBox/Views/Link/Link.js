import React from "react"
import styles from "./Link.module.css"

const Link = (props) => {
    return(
        <div className={styles.Link}>
            <img className={styles.Img} src={props.data.src} />
            <a className={styles.LinkAnchor} href={props.data.href}>{props.data.text}</a>
        </div>
    )
}

export default Link