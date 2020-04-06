import React,{useState,useEffect} from 'react';
import axios from 'axios'

const DataFetchingOne = () => {
const[loading,setLoading]=useState(true);
const[error,setError]=useState('');
const[post,setPost]=useState({});

useEffect(()=>
{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res=>{
        console.log(res);
        setLoading(false);
        setPost(res.data);
        setError('');
    })
    .catch(e=>{
        console.log(e);
        setLoading(false);
        setPost({});
        setError('Something went wrong');
    })
});

    return (
        <div>
            {loading? 'Loading':post.title }
            {error? error: null}
        </div>
    );
};

export default DataFetchingOne;