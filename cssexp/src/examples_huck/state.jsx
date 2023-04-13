import logo from './logo.svg';
import './App.css';
import { Button } from './components/button';
import React, { useState } from 'react';
import { Input } from './components/input';
function computerInitialCounter() {
    console.log('ghjjkljkl...')
    return Math.trunc(Math.random() * 20)
}


function App() {
    // const [counter, setcounter] = useState(0);
    // const [counter, setcounter] = useState(computerInitialCounter);
    const [counter, setcounter] = useState(() => {
        return computerInitialCounter()
    });

    function increment() {
        // setcounter(counter + 1)
        setcounter((prevCounter) => {
            return prevCounter + 1
        }
        )
        setcounter((prev) => prev + 1)
    }
    function decrement() {
        setcounter(counter - 1)
    }
    return (
        <div className="App">

            <h1>счетчик {counter}</h1>
            <button onClick={increment}>добавить</button>
            <button onClick={decrement}>убрать</button>
        </div >
    );
}

export default App;
