import React, { useState } from "react"
import styles from './Select.module.css'
import Option from "./Option/Option"

const Select = (props) => {
    const [position, setPosition] = useState(false)
    const [selected, setSelected] = useState(0)

    const options = props.options

    return (
        <div className={styles.Select}>

            <div 
                className={styles.Title}
            >
                {options[selected]}
            </div>

            <div 
                className={styles.Button} 
                onClick={() => {setPosition(!position)}}
            >
                &#8250;
            </div>

            <div 
                className={styles.Wrapper + ' ' + (!position && styles.Hide)}
            >
                {options.map((option, index) => (
                    <Option 
                        value={option} 
                        onSelect={
                            () => {
                                setPosition(false)
                                setSelected(index)
                            }
                        } 
                        key={index}
                        order={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default Select