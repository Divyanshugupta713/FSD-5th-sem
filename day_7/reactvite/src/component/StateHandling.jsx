import React, { useState } from 'react';

function StateHandling(){
    const [counter, setCounter] = useState(20);
    const [Red, setRed] = useState(0);
    const [Green, setGreen] = useState(0);
    const [Blue, setBlue] = useState(0);

function increment(){
        setCounter(counter + 10);
}
function changeColor(){
    setRed(Math.random() * 255);
    setGreen(Math.random() * 255);
    setBlue(Math.random() * 255);
}

return (
    
    
    <div style={{backgroundColor: `rgb(${Red}, ${Green}, ${Blue})`, border: '1px solid #ccc', padding: '20px', textAlign: 'center', marginTop: '50px'}}>
        <h2 style={{color: 'blue'}}>Counter App</h2>
        <h2 style={{color: 'green'}}> Counter: {counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={() => setCounter(counter - 5)}>Decrement</button>
        <button onClick={changeColor}>Change BG Color</button>
    </div>

)

 }
 export default StateHandling;
