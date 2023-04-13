
import React, { Component, useState } from 'react';
import styles from './tarif.module.css'
import cn from 'classnames';

export default function Tarif(props) {

    const { tarif } = props;
    const number = props.column;
    const styleColumnHeader = styles[`column${number}__header`];
    const styleColumnTarif = styles[`column${number}__tarif`];
    const [checked, setChecked] = useState(false);
    console.log(checked);
    function check() {
        setChecked(!checked)
    }
    // className={styles.active}
    return (

        <div className={
            cn([styles.activ, styleColumnTarif, (number == 2) ? styles.activ_select : {}, (checked) ? styles.activ__checked : {}])}
            onClick={check} >
            <p className={cn([styles.name, styleColumnHeader, (checked) ? styles.name__checked : {}])}> {tarif.name}</p>
            <p className={cn([styles.price, styleColumnTarif, (checked) ? styles.price__checked : {}])}> <sup>руб</sup>{tarif.price}<sub>/мес</sub> </p>
            <div className={styles.speed}>до  {tarif.speed} Мбит/c</div>
            <div className={styles.text} > объем включенного трафика неограничен</div>
        </div >
    );
}