import React,{useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
// import counterOne from './usingReducerComponents/counterOne';
import CounterTwo from './usingReducerComponents/counterTwo';
// import CounterOne from './usingReducerComponents/counterOne';
import CounterThree from './usingReducerComponents/CounterThree';
import CounterA from './usingReducerComponents/CounterA';
import CounterB from './usingReducerComponents/CounterB';
import CounterC from './usingReducerComponents/CounterC';
import DataFetchingOne from './usingReducerComponents/DataFetchingOne';
import DataFetchingTwo from './usingReducerComponents/DataFetchingTwo';
import ParentComponent from './UsingCallbackHookComponents/ParentComponent';
import CounterOne from './UseMemoHookComponent/CounterOne';
import FocusInput from './UseRefComponents/FocusInput';
import HookTimer from './UseRefComponents/HookTimer';
import DocTitleOne from './UseCustomHooksComponents/DocTitleOne';
import DocTitleTwo from './UseCustomHooksComponents/DocTitleTwo';

export const UserContext= React.createContext();
export const ChannelContext=React.createContext();

export const CounterContext=React.createContext();

const initialState=0;
const reducer =(state,action)=>{
    switch(action)
    {
        case 'increment':
            return state+1;            
        case 'decrement':
            return state-1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
};


function App() {
const[count,dispatch] =useReducer(reducer,initialState);

  return (
    <CounterContext.Provider value={{countState:count,countDispatch:dispatch}}>
    <div className="App">
      {/* Count - {count}
      <CounterA/>
      <CounterB/>
      <CounterC/> */}
      {/* <DataFetchingOne/> */}
      {/* <DataFetchingTwo/> */}
      {/* <ParentComponent/> */}
      {/* <CounterOne/> */}
      {/* <HookTimer/> */}
      <DocTitleOne/>
      <DocTitleTwo/>
    </div>
    </CounterContext.Provider>
  );
}

export default App;
