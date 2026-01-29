// import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

// function App() {
//     return (
//         <div>
//             <BrowserRouter>
//              <Link to="/">Allen|</Link>

//             <Link to="/jee/online-coaching-class-10">Class 10|</Link> 

//             <Link to="/jee/online-coaching-class-11">Class 11|</Link>

//             <Link to="/jee/online-coaching-class-12">Class 12</Link>
//                 <Routes>
//                     <Route path="/jee/online-coaching-class-10" element={<Class10program />} />
//                     <Route path="/jee/online-coaching-class-11" element={<Class11program />} />
//                     <Route path="/jee/online-coaching-class-12" element={<Class12program />} />
//                     <Route path="/" element={<Landing />}/>
//                     <Route path="*" element={<ErrorPage />}/>
//                 </Routes>
//             </BrowserRouter>
//         </div>

//     )
// }

// function ErrorPage(){
//     return <div>
//         Sorry Page not found
//     </div>
// }

// function Landing(){
//     return (
//         <div>
//             Welcome to Allen!
//         </div>
//     )

// }

//  function Class10program(){
//     return (
//         <div>
//             Neet program for the Class 10th
//         </div>
//     )

//  }
//  function Class11program(){
//     return (
//         <div>
//             Neet program for the Class 11th
//         </div>
//     )

//  }
//  function Class12program(){
//     return (
//         <div>
//             Neet program for the Class 12th
//         </div>
//     )

//  }

// export default App
import { useRef,useState } from 'react';
import './App.css'
function App(){
    const inputRef=useRef();


    //One way to focus
    // function focusOnInput(){
    //     document.getElementById("name").focus();
    // }

    function focusOnInput(){
        inputRef.current.focus();
    }
    return (
        <div>
            Sign up
            <input ref={inputRef} type="text" />
            <input type="text" />
            <button onClick={focusOnInput}>Submit</button>
        </div>
    )
}

export default App