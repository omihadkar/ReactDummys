import React,{useReducer} from 'react';

const initialState={
    firstCounter:0,
    secondCounter:10
};
const reducer =(state,action)=>{
    switch(action.type)
    {
        case 'increment':
            return {...state, firstCounter: state.firstCounter+action.value};            
        case 'decrement':
            return {...state,firstCounter: state.firstCounter-action.value};
        case 'increment2':
            return {...state,secondCounter: state.secondCounter+action.value};            
        case 'decrement2':
            return {...state,secondCounter: state.secondCounter-action.value};
        case 'reset':
            return initialState
        default:
            return state;
    }
};


function CounterTwo() {
    const[count,dispatch] = useReducer(reducer,initialState);

    return (
        <div>
            <div>First counter - {count.firstCounter}</div>
            <div>Second counter - {count.secondCounter}</div>
            <button onClick={()=> dispatch({type: 'increment', value: 1})}>increment</button>
            <button onClick={()=> dispatch({type: 'decrement', value: 1})}>decrement</button>
            <button onClick={()=> dispatch({type: 'increment', value: 5})}>increment by 5</button>
            <button onClick={()=> dispatch({type: 'decrement', value: 5})}>decrement by 5</button>
            <button onClick={()=> dispatch({type: 'increment2', value: 1})}>increment cn 2</button>
            <button onClick={()=> dispatch({type: 'decrement2', value: 1})}>decrement cn 2</button>
            <button onClick={()=> dispatch({type: 'increment2', value: 5})}>increment by 5 cn 2</button>
            <button onClick={()=> dispatch({type: 'decrement2', value: 5})}>decrement by 5 cn 2</button>
            <button onClick={()=> dispatch({type:'reset'})}>reset</button>
        </div>
    );
};

export default CounterTwo;