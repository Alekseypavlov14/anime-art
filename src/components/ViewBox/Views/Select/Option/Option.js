import React, { useContext } from 'react'
import CategoriesPageContext from '../../CategoriesPageContext'
import styles from './Option.module.css'

const Option = (props) => {
    const {categoryName, setCategoryName} = useContext(CategoriesPageContext)

    return(
        <div 
            className={styles.Option + ' ' + (props.order === 0 && styles.OptionActive)}
            onClick={(e) => {
                e.target.parentNode.childNodes.forEach(option => option.classList.remove(styles.OptionActive))
                e.target.classList.add(styles.OptionActive)

                props.onSelect()
                setCategoryName(props.value)
            }}
        >
            {props.value}
        </div>
    )
}

export default Option