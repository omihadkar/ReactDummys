import React,{useState} from 'react';

const HookCOunterFour = () => {

    const [items,setItems]=useState([]);

const AddItems=()=>{
setItems([...items,{
    id: items.length,
    value: Math.floor(Math.random() * 10)+1
}])
};

    return (
        <div>
            <button onClick={AddItems}>Click to add</button>
            <ul>
                {
                    items.map(item=>(
                        <li key={item.key} >{item.value}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default HookCOunterFour;