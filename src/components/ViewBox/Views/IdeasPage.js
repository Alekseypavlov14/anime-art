import React, { useEffect, useState } from "react"
import Article from "./Article/Article"
import styles from './IdeasPage.module.css'
import posts from './../../../posts.json'

const IdeasPage = () => {
    return(
        <div className={styles.IdeasPage}>
            {posts.reverse().map(post => (
                <Article content={post} key={post.id} />
            ))}
        </div>
    )
}

export default IdeasPage