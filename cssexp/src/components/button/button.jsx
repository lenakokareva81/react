import React from 'react';
import styles from './Button.module.css'
const Button = props => {
    const { text = '' } = props;
    console.log(styles);
    return (<button className={styles.active}> {text} </button>)

}

export { Button }