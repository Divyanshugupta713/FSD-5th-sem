import {useEffect, useState} from "react";

function SampleUseEffect(){
    
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        // console.log("hey... using useEffect");
        console.log("ucounrter value is: " + counter);
    },);


function stepcounter(){
    setCounter(counter + 5);
}
    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h2>Counter App</h2>
            <p>Counter: {counter}</p>
            <button onClick={stepcounter}>Increment</button>
        </div>
    );
}

export default SampleUseEffect;