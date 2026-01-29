import { useEffect } from "react";
import { useState } from "react";


export function usePostTitle(){
    const [post,setPost]=useState({});

  async function getPost(){
    const response=await fetch("https://jsonplaceholder.typicode.com/posts/1");

    const json=await response.json();

    setPost(json);
  }

  useEffect(() => {
    getPost();
  },[])
 

  return post.body;

}

export function useFetch(url) {
    const [finalData,setFinalData]=useState({});
    const [loading,setloading]=useState(true);
     console.log(url);//for debuggin purpose

    async function getDetails(){
        setloading(true);
        fetch("url");//url that the user give us in the argument  should be a good url
        const response=await fetch(url);
        const json=await response.json();
        setFinalData(json);
        setloading(false);
    }

    useEffect(()=> {
        getDetails();
    },[url]) //if url change run that

    

    return {
        finalData,
        loading
    }

}

//REVISE ALL THE CUSTOM HOOK BEFORE STUDYING THIS REFECTHING HOOK