import React from 'react';
import styles from './Input.module.css'
const Input = props => {
    const { type = 'text' } = props;
    console.log(styles);
    return (<input type={type} className={styles.active} />)

}

export { Input }