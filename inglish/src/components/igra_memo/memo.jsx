import React, { Component, useState } from 'react';
import cn from 'classnames';
import styles from './memo.module.css';
import MemoCard from '../karta_memo/kartaMemo';
import words from '../json/json'

function IgraMemo() {
    const [word1, setword1] = useState(0);
    const [counter, setcounter] = useState(0);
    function increment() {
        // setcounter(counter + 1)
        setcounter((prev) => {
            return prev + 1
        }
        )
    }
    function provword1(id) {

        setword1((prev) => {
            return prev = id
        })
    }


    return (

        < div className={styles.pole} >

            <div className={styles.karta} onClick={() => provword1(words[0].id)}><MemoCard word={words[0].english} key={words[0].id} /></div>
            <div className={styles.karta} onClick={() => provword1(words[1].id)}><MemoCard word={words[1].english} key={words[1].id}></MemoCard></div>
            <div className={styles.karta} onClick={() => provword1(words[0].id)}><MemoCard word={words[2].english} key={words[2].id}></MemoCard></div>
            <div className={styles.karta} onClick={provword1}><MemoCard word={words[3].english} key={words[3].id}></MemoCard></div>
            <div className={styles.karta} onClick={provword1}> <MemoCard word={words[4].english} key={words[4].id}></MemoCard></div>
            <div className={styles.karta} onClick={provword1}><MemoCard word={words[0].russian} key={words[0].id + 10000} ></MemoCard></div>
            <div className={styles.karta} onClick={provword1}><MemoCard word={words[1].russian} key={words[1].id + 10000}></MemoCard></div>
            <div className={styles.karta} onClick={provword1}><MemoCard word={words[2].russian} key={words[2].id + 10000}></MemoCard></div>

            <div className={styles.karta} onClick={provword1}><MemoCard word={words[4].russian} key={words[4].id + 10000}></MemoCard></div>
            <p>{word1}</p>
            <p>{counter}</p>
            <button onClick={increment}>прибавить</button>

        </div >



    );

}


export default IgraMemo;
