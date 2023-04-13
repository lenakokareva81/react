import './card.css';
import React, { Component, useState } from 'react';
import styles from './card.css'


function Card(props) {

    const { word } = props;
    // const body = this.state.isOpen;
    // const [side, setside] = useState('true');
    // function sideСhange() {

    //     //console.log('ghh')
    // }
    // onClick={sideСhange}
    return (
        <div>
            <div className="card effect__hover" >
                <div className="card__front">
                    <div className="front">
                        <p className="h1">{word.english}</p>
                        <p className="h2">{word.transcription}</p>
                    </div>
                </div>
                <div className="card__back">
                    <div className="back">
                        <p className="h1">{word.russian}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Card;