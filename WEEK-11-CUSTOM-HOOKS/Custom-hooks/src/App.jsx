import { useRef, useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useFetch } from './hooks/usefetch';
import { useprev } from './hooks/use-prev';


//custom hook
function useCounter(){
  const [count,setCount]=useState(0);

  function increaseCount(){
    // setCount(count+1);
    setCount(c=>c+1);
  }
   
  return {
    count: count,
    increaseCount: increaseCount
  }
}



function useDebounce(originalfn){
  const currentClock=useRef();

  const fn=()=>{
    clearTimeout(currentClock.current);
    currentClock.current=setTimeout(originalfn,200);
  }

  return fn;
} 
function App(){
  // const [currpost,setcurrpost]=useState(1);
  // const {finalData,loading}=useFetch("https://jsonplaceholder.typicode.com/posts/"+currpost);
  

  
  // if (loading){
  //   return (
  //     <div>
  //       Loading...
  //     </div>
  //   )
  // }
  
  // return (
  //   <div>
  //     <button onClick={()=>setcurrpost(1)}>1</button>
  //     <button onClick={()=>setcurrpost(2)}>2</button>
  //     <button onClick={()=>setcurrpost(3)}>3</button>
  //     <button onClick={()=>setcurrpost(4)}>4</button>
  //       {JSON.stringify(finalData)}

  //   </div>
  // )

                                          //   const [state,setstate]=useState(0);
                                          //   const prev=useprev(state);

                                          //   return (
                                          //     <>
                                          //     <p>{state}</p>
                                          //     <button
                                          //     onClick={()=>{
                                          //       setstate((curr)=> curr+1)
                                          //     }}
                                          //     >
                                          //       Click me
                                          //     </button>

                                          //     <p>The previous value was{prev}</p>
                                          //     </>
                                          //   );

                                          // }
                //THIS ABOVE CODE WAS OF USEPREV HOOK 
          
    function SendDataToBackend(){
      fetch("api.amazon.com/seach/");
    }

    const debouncedFn=useDebounce(SendDataToBackend)
   return (
    <>
    <input type="text" onChange={debouncedFn}/>


    </>

  )

}



function Counter(){
   const {count,increaseCount}=useCounter();

   return(
    <button onClick={increaseCount}>Increase {count}</button>
   )

}

export default App


