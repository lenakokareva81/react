import logo from './logo.svg';
import './App.css';
import { Button } from './components/button';
import React, { useState, useEffect } from 'react';
import { Input } from './components/input';


function App() {
    const [type, setType] = useState(`users`)
    const [data, setData] = useState([])
    const [pos, setPos] = useState({
        x: 0, y: 0
    })
    const mouseMoveHandler = event => {
        setPos(
            {
                x: event.clientX,
                y: event.clientY,
            }
        )
    }
    // useEffect(() => {
    //   console.log('render');
    // })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
        return () => {
            console.log('clean type')
        }
    }, [type])
    useEffect(() => {

        window.addEventListener('mousemove', mouseMoveHandler)

    }, [])
    return (
        <div className="App">
            <h2>пользователи {type}</h2>
            <button onClick={() => setType('users')}>пользователи</button>
            <button onClick={() => setType('todos')}>todos</button>
            <button onClick={() => setType('posts')}>посты</button>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div >
    );
}

export default App;
