import logo from './logo.svg';
import React from 'react';
import Karta from './components/inglish_karta/karta';
import Card from './components/card_changeling/card';
import words from './components/json/json';
import './App.css';
import IgraMemo from './components/igra_memo/memo.jsx'
import IgraMemoJpg from './components/memori_jpeg/memory.jsx'



function App() {

  return (
    // карточки с переворотом
    // <div >
    //   <div >
    //     {words
    //       .filter((word) => word.tags == "животные")
    //       .map((word) => < Card word={word} key={word.id} />)}
    //   </div>
    // карточки с кнопкой
    // <div >
    //   {
    //     words
    //       .filter((word) => word.tags == "животные")
    //       .map((word) => < Karta word={word} key={word.id} />)
    //   }
    // </div>
    // </div >
    // игра мемори 

    // <IgraMemo></IgraMemo>
    <IgraMemoJpg words={words.slice(0, 6)}></IgraMemoJpg>
  );
}



export default App;
