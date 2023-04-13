import logo from './logo.svg';
import './App.css';
import React, { useState, useMemo, useEffect } from 'react';
function complexCompute(num) {
    let i = 0
    while (i < 1000000000) i++
    return num * 2
}

function App() {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)
    const styles = {
        color: colored ? 'black' : 'red'
    }
    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number])
    useEffect(
        () => {
            console.log('styles chsnged')
        }, [styles]
    )

    return (
        <div className="App">
            <h1 style={styles} > Вычисляемое свойсство: {number}</h1>
            <button onClick={() => setNumber(prev => prev + 1)}>добавить</button>
            <button onClick={() => setNumber(prev => prev - 1)}>убрать</button>
            <button onClick={() => setColored(prev => !prev)}>изменить</button>
        </div >
    );
}

export default App;