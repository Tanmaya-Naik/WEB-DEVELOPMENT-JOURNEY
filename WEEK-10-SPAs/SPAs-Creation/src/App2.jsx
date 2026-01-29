

// import { useRef, useState } from "react";

                    //Raw Variable approach

// //LETS BUILD A CLOCK WITH START AND STOP BUTTON USING USEREF,NORMAL VARIABLE AND USESTATE HOOK
// function App2(){
//     const [currcount,setCurrCout]=useState(0);
//     let timer=0;

//     function Startclock(){
//        timer= setInterval(function(){
//             setCurrCout(c => c+1);  //setState(prevValue => newValue); this is the syntax
//         },1000);

//     }

//     function Endclock(){
//         clearInterval(timer)
//     }
//     //To stop the clock we need to store it somewhere and we can't store it in normal variable as it would be a local variable and cant accessible outside that scope
//     //if we make it global then we are using a raw variable when the component rerender it get initialize to 0 again so this is a bad approach

//     return (
//         <div>
//             {currcount}
//             <br />
//             <button onClick={Startclock}>Start</button>
//             <button onClick={Endclock}>Stop</button>
//         </div>
//     )

// }

                    //  USING USESTATE
                    //PROBLEM=RE-RENDERING TOO MANY TIME EXTRA RE RENDER
// function App2(){
//     const [currcount,setCurrCout]=useState(0);
//     const [timer,setTimer]=useState(0);
    

//     function Startclock(){
//        let value=setInterval(function(){
//             setCurrCout(c => c+1);  //setState(prevValue => newValue); this is the syntax
//         },1000);
//         setTimer(value);

//     }

//     function Endclock(){
//         clearInterval(timer)
//     }
//     return (
//         <div>
//             {currcount}
//             <br />
//             <button onClick={Startclock}>Start</button>
//             <button onClick={Endclock}>Stop</button>
//         </div>
//     )

// }

// export default App2

//                 //lets use     USEREF
// function App2(){
//     const [currcount,setCurrCount]=useState(0);
//     const timer=useRef();
    

//     function Startclock(){
//        let value=setInterval(function(){
//             setCurrCount(c => c+1);  //setState(prevValue => newValue); this is the syntax
//         },1000);
//         timer.current=value;

//     }

//     function Endclock(){
//         clearInterval(timer.current)
//     }
//     return (
//         <div>
//             {currcount}
//             <br />
//             <button onClick={Startclock}>Start</button>
//             <button onClick={Endclock}>Stop</button>
//         </div>
//     )

// }

// export default App2

import { useRef, useState, useEffect } from "react";

function App2() {
  const [currCount, setCurrCount] = useState(0);
  const timer = useRef(null);

  function Startclock() {
    // Clear any existing interval before creating a new one
    if (timer.current) clearInterval(timer.current);

    timer.current = setInterval(() => {
      setCurrCount(c => c + 1);
    }, 1000);
  }

  function Endclock() {
    clearInterval(timer.current);
    timer.current = null; // reset it
  }

  // Cleanup when component unmounts (best practice)
  useEffect(() => {
    return () => clearInterval(timer.current);
  }, []);

  return (
    <div>
      {currCount}
      <br />
      <button onClick={Startclock}>Start</button>
      <button onClick={Endclock}>Stop</button>
    </div>
  );
}

export default App2;
