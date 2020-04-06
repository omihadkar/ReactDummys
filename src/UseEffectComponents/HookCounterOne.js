import React,{useState,useEffect} from 'react';

const HookCounterOne = () => {

    const [items,setItems]=useState(0);
    const [names,setNames]=useState('');

    useEffect(()=>{
        console.log('useEffect is getting called.');
        document.title =`You clicked ${items}`;
    },[items])
    
    return (
        <div>
            <input type="text" value={names} onChange={(e)=>setNames(e.target.value)}/>
            <button onClick={()=> setItems(items=>items+1)}>Click to see count {items}</button>
        </div>
    );
};

export default HookCounterOne