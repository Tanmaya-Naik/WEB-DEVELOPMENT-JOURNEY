import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Sidebarclass1 } from './components/answers/1-basic-project'

function App() {

  return (
    <>
    <div className="h-screen bg-white dark:bg-blue-800 text-black dark:text-white" >
       <button onClick={()=>{
        document.querySelector("html").classList.toggle("dark")}}>
          Toggle theme
        </button>
        <div className='text-2xl dark:text-red-500 text-blue-900'>
           Hii three
        </div>
    </div>
    
    </>
  )
}

export default App
 