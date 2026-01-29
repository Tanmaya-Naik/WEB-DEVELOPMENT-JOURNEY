// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useEffect, useState } from "react"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// function App(){
//   return (
//     <div style={{backgroundColor:"#dfe6e9", height:"100vh"}}>
//       <div style={{display:"flex",justifyContent:"center"}}>
//         <div>
//           <div>
//             <PostComponent/>
//             <br />
//           </div>
//           <div>
//             <PostComponent/>
//             <br />
//           </div>
//           <div>
//             <PostComponent/>
//             <br />
//           </div>
//           <div>
//             <PostComponent/>
//             <br />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
 

// const style1={ width:200, backgroundColor:"white", borderColor:"grey",
//   borderWidth:1,padding:20 }

// const style2={width:30,height:30,borderRadius:20}
// function PostComponent(){
//   return (
//   <div style={style1}>
//   <div style={{display:"flex"}}>
//     <img src="https://imgs.search.brave.com/Kr0TalnTyAOGKxz1SZu-iwAkregIGro82vAldWy9dso/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDkxMjE0/NTUuanBn" style={style2} />
//      <div style={{fontSize:10}}>
//       <b>
//         100xDevs
//       </b>
//       <div>23,999 followers</div>
//       <div>18min</div>
//      </div>
//   </div>
//   <div style={{fontSize:12}}>
//     Want to know how to stay consistent
//     </div>
//   </div>
//   )
// }

// export default App

                        // import { useState } from "react";

                        // const style1={
                        //   background:"#dfe6e9",
                        //   height:"100vh"
                        // }

                        // function App(){
                        //   return (
                        //     <div style={style1}>
                        //       <Notifficationtrack/>
                        //       <Notifficationtrack/>
                        //       <Notifficationtrack/>
                        //     </div>
                        //   )
                        // }

                        // const Notifficationtrack=()=>{
                        //   const [notificationCount,setNotificationCount]=useState(0);

                        //   return (
                        //     <div>
                        //       <button onClick={()=> setNotificationCount(notificationCount+1)}>
                        //         Increase Count
                        //       </button>
                        //       {notificationCount}
                        //     </div>
                          
                        //   );
                        // };

                        // export default App


// function App(){
//   const [posts,setPosts]=useState([]);

//   // const posts=[{
//   //   name:"Tanmaya",
//   //   subtitle:"10000 followers",
//   //   time:"18m ago",
//   //   image:"https://imgs.search.brave.com/awTlVgpHTbuxEeaqggdchdViHFMw-1xmS3EcyCc2iks/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/Mjc1MTU3L3Bob3Rv/L2Nsb2NrLWZhY2Uu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXMtVG5tdmFNZ2o4/M29Xb1JDU3o2aThO/Z0ZiZHdPaE02S0NB/ZUpDaVhXcUU9",
//   //   description:"heogoodooso"
//   // }];
//   //this above is a template and array of object and we have to convert this array of object to array of
//   //component and then render the array of component in the main website

//   //and also ask chatgpt bro about list in react list of component

//   const ppostComponent=posts.map(post => <PostComponent
//   name={post.name}
//   subtitle={post.subtitle}
//   time={post.time}
//   image={post.image}
//   description={post.description}
//   />
//   )


//   function addPost(){
//     setPosts([...posts,{
//        name:"Tanmaya",
//     subtitle:"10000 followers",
//     time:"18m ago",
//     image:"https://imgs.search.brave.com/awTlVgpHTbuxEeaqggdchdViHFMw-1xmS3EcyCc2iks/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/Mjc1MTU3L3Bob3Rv/L2Nsb2NrLWZhY2Uu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXMtVG5tdmFNZ2o4/M29Xb1JDU3o2aThO/Z0ZiZHdPaE02S0NB/ZUpDaVhXcUU9",
//     description:"Hey bro understood everything?"
//     }])
//    //...posts means all the original array element and after that new element you want to add
//   }
//   return (
//     <div style={{background:"#dfe6e9", height:"100vh",}}>
//       <button onClick={addPost}>Add Post</button>
//       <div style={{display:"flex",justifyContent:"center"}}>
//         <div>
//         {ppostComponent}
//         </div>
//       </div>
//     </div>
//   )
// }


// import { useEffect, useState } from "react";
// import { PostComponent } from "./Post";


// function App(){
//   const [count,setCount]=useState(1);

//   function Increase(){
//     console.log("increase function call")
//     // setCount(count+1); //we no longer use this type of setCount calling we use another varient of setCount calling
//     setCount(function(currentvalue){
//       return currentvalue+1;
//     });
//   }
   

//   useEffect(function(){
//     console.log("setinterval call")
//     const id=setInterval(Increase,1000);

    
//   return () => clearInterval(id); // cleanup!
//   },[]);

//   //[] dependencies array

//   useEffect(function(){
//     console.log("the count has been upadted"+count)
//   },[count]);
  

//   return (
//           <div>
//             <div style={{display:"flex"}}>
//               <div style={{background:"red",
//               borderRadius:"20",width:15,height:15,paddingLeft:10,paddingTop:5
//             }}>
//               {count}
//             </div>
//             </div>
//             <img style={{cursor:"pointer"}} src={"https://imgs.search.brave.com/ctdg3nJ1J88LaF1QyR-weLeOspC0wFLezKtCweGwyXE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZiLzIz/LzExL2ZiMjMxMWQ0/NjEzNzNhZTAzOGMx/YTJkY2UwMDJhMGI0/LmpwZw"}
//             width={40} />
//           </div>
//   )
// }

// export default App

// function App(){

//   const [currentTab,setCurrentTab]=useState("feed");

//   useEffect(function(){
//     console.log("Send data to the backend to get the data for the tab"+currentTab);

//   },[currentTab]);

//   return(
//     <div>
//       <button onClick={function(){
//         setCurrentTab("feed")
//       }} style={{color:currentTab=="feed" ?"red":"black"}}>Feed</button>
//       <button onClick={function(){
//         setCurrentTab("notification")
//       }} style={{color:currentTab=="notification" ?"red":"black"}}>Notification</button>
//       <button onClick={function(){
//         setCurrentTab("message")
//       }} style={{color:currentTab=="message" ?"red":"black"}}>Message</button>
//       <button onClick={function(){
//         setCurrentTab("jobs")
//       }} style={{color:currentTab=="jobs" ?"red":"black"}}>Jobs</button>
//     </div>
//   )
// }
// //we have a currentTab state variable which we initialize to feed and as we click on the button it will set this to the feed or notification and style apply to that currenTab
// //when we 

// export default App


//we have a currentTab state variable which we initialize to feed and as we click on the button it will set this to the feed or notification and style apply to that currenTab
//when we 



import { useEffect, useState } from "react";

function App() {
  // 1. State Management using useState hook
  // `currentTab` stores the ID of the todo to fetch. Initialized to 1.
  const [currentTab, setCurrentTab] = useState(1);
  // `tabData` will store the object we fetch from the API. Initialized to an empty object.
  const [tabData, setTabdata] = useState({});
  // `loading` is a boolean to track if we are currently fetching data. Initialized to true.
  const [loading, setloading] = useState(true);

  // 2. Data Fetching using useEffect hook
  // This effect runs whenever `currentTab` changes, because `currentTab` is in the dependency array.
  useEffect(function() {
    console.log("Send data to the backend to get the data for the tab " + currentTab);
    
    // Set loading to true before starting the fetch
    setloading(true);
    
    // Fetch data from the API using the currentTab ID
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
      .then(async res => {
        const json = await res.json();
        // Once data is fetched, update the tabData state
        setTabdata(json);
        // Set loading to false as the data has been received
        setloading(false);
      });
  }, [currentTab]); // The dependency array: this effect re-runs when `currentTab` changes.

  // 3. Rendering the UI (JSX)
  return (
    <div>
      {/* Buttons to change the current tab */}
      <button 
        onClick={function() { setCurrentTab(1); }} 
        style={{ color: currentTab === 1 ? "red" : "black" }}
      >
        Todo #1
      </button>
      <button 
        onClick={function() { setCurrentTab(2); }} 
        style={{ color: currentTab === 2 ? "red" : "black" }}
      >
        Todo #2
      </button>
      <button 
        onClick={function() { setCurrentTab(3); }} 
        style={{ color: currentTab === 3 ? "red" : "black" }}
      >
        Todo #3
      </button>
      <button 
        onClick={function() { setCurrentTab(4); }} 
        style={{ color: currentTab === 4 ? "red" : "black" }}
      >
        Todo #4
      </button>
      <br />
      
      {/* 4. Conditional Rendering */}
      {/* If `loading` is true, show "Loading...". Otherwise, show the title from the fetched data. */}
      {loading ? "Loading..." : tabData.title}
    </div>
  );
}

export default App;
