
import { useContext, useState,createContext } from 'react'
import './App.css'

const BulbContext=createContext();//STEP ONE WE DEFINED OUR CONTEXT



//CREATING A WRAPPER COMPONENT 
//ITS LIKE WHOEVER USEING ME MAKE SURE YOU SEND SOMETHING INSIDE YOU AND THAT COME AS CHILDREN TO THIS WRAPPER COMPONENET

                  // export function BulbProvider({children}){
                  //   const [bulbon,setBulbon]=useState(true);

                  //   return <BulbContext.Provider value={{
                  //     bulbon:bulbon,
                  //     setBulbon:setBulbon
                  //   }}>
                  //     {children}
                  //   </BulbContext.Provider>
                  // }   MAKE SURE TO UNDERESTAND THIS TANMAYA

function App() {
  const [bulbon,setBulbon]=useState(true);
  return (
    <div>
      {/* STEP 2 HERE WE WRAPE OUR App inside context provider  */}
      <BulbContext.Provider value={{
        bulbon:bulbon,
        setBulbon:setBulbon
      }}>   
        <Light/>
      </BulbContext.Provider>
    </div>
  )
}

function Light(){
  
  return (
    <div>
      <LightBulb/>
      <LightSwithch/>
    </div>
  )
}

function LightBulb(){
  //step 3-Consume the context
  const {bulbon}=useContext(BulbContext);
  
  return (
    <div>
      {bulbon ?"Bulb On":"Bulb off"}
    </div>
  )
}
//PROBLEM HERE IS THAT WE HAVE STATE VARIABLE INTHE BULBL STATE COMPONENT BUT TO TOGGLE IT WE NEED TO ACCESS IN THE TOGGLEBULB COMPONENT SO LETS ROLL
function LightSwithch({}){
  const {bulbon,setBulbon}=useContext(BulbContext);
  
  function toggle(){
    setBulbon(currentState => !currentState);
    // setBulbon(!setBulbon);
  }
  //You can pass this to the main parent also

  return (
    <div>
      <button onClick={toggle}>Toggle the bulb</button>
    </div>
  )
}

export default App
