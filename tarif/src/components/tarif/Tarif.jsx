
import React, { Component } from 'react';
import styles from './tarif.module.css'
import cn from 'classnames';

export default function Tarif(props) {

    const { tarif } = props;
    const number = props.column;
    const styleColumn = styles[`column${number}`]
    // className={styles.active}
    return (

        <div className={cn([styles.activ, styleColumn, (number == 2) ? styles.activ_select : {}])} >
            <p className={cn([styles.name])}> {tarif.name}</p>
            <p className={cn([styles.price])}> <sup>руб</sup>{tarif.price}<sub>/мес</sub> </p>
            <div className={styles.speed}>до  {tarif.speed} Мбит/c</div>
            <div className={styles.text}> объем включенного трафика неограничен</div>
        </div >
    );
}