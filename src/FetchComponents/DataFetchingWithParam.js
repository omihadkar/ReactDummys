import React, {useState,useEffect} from 'react';
import axios from 'axios'



const DataFetchingWithParam = () => {

    const [post,setPost]=useState({});
    const [id,setId]=useState(1);
    const [idFromButton,SetIdFromButton]=useState(1);

    const changeId=()=>{
        SetIdFromButton(id);
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res);
            setPost(res.data);
        })
        .catch(e=>{
            console.log(e);
        })
    },[idFromButton]);

    return (
        <div>
            {/* <ul>
                {
                    posts.map(post=> <li key={post.key}>{post.title}</li>)
                }
            </ul> */}
            <button type="button" onClick={changeId}>Click to retrieve</button>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
            <h1>{post.title}</h1>
         </div>
    );
};

export default DataFetchingWithParam;