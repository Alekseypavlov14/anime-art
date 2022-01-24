import React, { useState } from "react"
import styles from './CategoryPage.module.css'
import posts from './../../../posts.json'
import Article from './Article/Article'
import Select from "./Select/Select"
import CategoriesPageContext from "./CategoriesPageContext"

const CategoryPage = () => {
    // create copy of the posts array
    const postsCopy = []
    // coping
    for( let post of posts ){
        postsCopy.push(post)
    }

    postsCopy.reverse()

    //create unique categories
    const categories = Array.from( new Set( postsCopy.map(post => post.category) ) )

    const [categoryName, setCategoryName] = useState(categories[0])

    return(
        <CategoriesPageContext.Provider value={{categoryName, setCategoryName}}>
            <div className={styles.CategoryPage}>

                <Select options={categories}/>

                <div className={styles.Container}>
                    {
                        postsCopy
                        .filter(post => post.category === categoryName)
                        .map((post, index) => (<Article content={post} key={index} />))
                    }
                </div>

            </div>
        </CategoriesPageContext.Provider>
    )
}

export default CategoryPage