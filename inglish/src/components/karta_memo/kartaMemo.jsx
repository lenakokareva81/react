import React, { Component } from 'react';
import cn from 'classnames';
import styles from './kartaMemo.module.css'
function MemoCard(props) {

    const { word } = props;
    return (
        <div className={styles.div}>
            <label>
                <input type="checkbox" />
                <div className={styles.card}>
                    <div className={styles.front}></div>
                    <div className={styles.back}>{word}</div>
                </div>
            </label>
        </div>
    );
}


export default MemoCard;