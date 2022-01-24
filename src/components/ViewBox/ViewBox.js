import React, { useContext, useState } from "react"
import IdeasPage from "./Views/IdeasPage"
import styles from './ViewBox.module.css'
import AboutPage from "./Views/AboutPage"
import StateContext from "../../context"
import CategoryPage from "./Views/Categories"

const ViewBox = () => {
    const {view} = useContext(StateContext)

    const views = [
        (<IdeasPage />),
        (<CategoryPage/>),
        (<AboutPage/>),
    ]

    return (
        <div className={styles.ViewBox}>
            {views[view]}
        </div>
    )
}

export default ViewBox