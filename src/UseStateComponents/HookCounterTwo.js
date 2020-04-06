import React ,{useState}from 'react';

function HookCounterTwo(props) {
const initialCount=0;    
const [count,setCount]=useState(initialCount);

const IncremtByFive=()=>{
    for (let index = 0; index < 5; index++) {
        setCount(prevCount=> prevCount+1);        
    }
} ;

    return (
        <div>
            Count: {count}
            <button onClick={()=> setCount(initialCount)}>Reset Count</button>
            <button onClick={()=> setCount(prevCount=> prevCount+1)}>Increment by 1</button>
            <button onClick={()=> setCount(prevCount=> prevCount-1)}>Decrement by 1</button>
            <button onClick={IncremtByFive}>Increment by 5</button>
        </div>
    );
}


export default HookCounterTwo;