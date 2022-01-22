import React from "react"
import Title from "./Title"
import Image from "./Image"
import Content from "./Content"
import styles from './Article.module.css'

const Article = (props) => {
    return (
        <div className={styles.Article}>
            <Title text={props.content.title}/>
            <Image src={props.content.src}/>
            <Content text={props.content.describes} />
        </div>
    )
}

export default Article