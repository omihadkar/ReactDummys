import React,{useContext} from 'react';
import {CounterContext} from '../App'

const CounterD = () => {
    const countContext=useContext(CounterContext);

    return (
        <div>
            <button onClick={()=> countContext.countDispatch('increment')}>increment</button>
            <button onClick={()=> countContext.countDispatch('decrement')}>decrement</button>
            <button onClick={()=> countContext.countDispatch('reset')}>reset</button>
        </div>
    );
};

export default CounterD;