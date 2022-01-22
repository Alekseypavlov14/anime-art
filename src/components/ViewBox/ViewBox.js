import React, { useContext, useState } from "react"
import IdeasPage from "./Views/IdeasPage"
import styles from './ViewBox.module.css'
import AboutPage from "./Views/AboutPage"
import StateContext from "../../context"

const ViewBox = () => {
    const {view, setView} = useContext(StateContext)

    const views = [
        (<IdeasPage />),
        (<AboutPage/>)
    ]

    return (
        <div className={styles.ViewBox}>
            {views[view]}
        </div>
    )
}

export default ViewBox