import React, { useState, useEffect } from 'react';
function Testfun(props) {
    const [s1, setS1] = useState(props.arg);
    const buttonHandler = () => {
        let val = s1;
        val++;
        setS1(val);
        console.log('buttonHandler')
    }
    useEffect(() => {
        console.log('useEffect')
    });
    console.log('render 1')
    return (
        <>
            {console.log('render 2')}
            <div>
                <button onClick={buttonHandler}>push</button>
            </div>
            <div>
                {s1}
            </div>
        </>
    )
}

export default Testfun;
