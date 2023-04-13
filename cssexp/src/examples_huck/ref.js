import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';


function App() {
    const [value, setValue] = useState('initial')
    const renderCount = useRef(1);
    const inputRef = useRef(null);
    const prevValue = useRef('');

    useEffect(() => {
        prevValue.current = value

    }, [value])

    useEffect(() => {
        renderCount.current++
        console.log(inputRef.current)
    })

    const focus = () => inputRef.current.focus()
    return (
        <div className="App">
            <h1>количесттво рендеров{renderCount.current}</h1>
            <h1> прошлое значение {prevValue.current}</h1>
            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
            <button onClick={focus}>фокус</button>
        </div >
    );
}

export default App;