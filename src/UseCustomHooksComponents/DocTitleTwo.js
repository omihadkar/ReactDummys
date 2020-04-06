import React,{useState} from 'react';
import useDocumentTitle from './Hooks/useDocumentTitle';
import useCounter from './Hooks/useCounter';

const DocTitleTwo = () => {
const [count,setCount]=useState(0);

const [countFromCounter,increment,decrement,reset]=useCounter(0);

useDocumentTitle(count);

    return (
        <div>
            <button onClick={()=> setCount(count+1)}>Count - {count}</button>
            <div>
            <div>
            Total count: {countFromCounter}
        </div>
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
            </div>
        </div>
    );
};

export default DocTitleTwo;