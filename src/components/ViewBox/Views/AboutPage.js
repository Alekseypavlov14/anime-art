import React from "react"
import Link from "./Link/Link"
import styles from './AboutPage.module.css'
import contacts from './../../../contacts.json'

const AboutPage = () => {
    return(
        <div className={styles.AboutPage}>
            {contacts.map(contact => (
                <Link data={contact} key={contact.text} />
            ))}
        </div>
    )
}

export default AboutPage