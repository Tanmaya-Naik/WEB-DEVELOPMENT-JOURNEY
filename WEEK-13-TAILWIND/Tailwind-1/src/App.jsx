import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Button } from './Components/Button'
// import { Input } from './Components/input'
import { OTP } from './Components/Otp'

function App() {
  // #8094ad
  //  19406a 
  return (
    <>
    <div className="h-screen bg-[#002b5b] flex flex-col">
      <OTP/>

    </div>
    </>

  )
}

export default App



//VERY VERY IMPORTANT NOTE TANMAYA THIS IS THE CODE OF 1ST SCREEN ASSINGMEN
// {/* <div className="h-screen bg-[#002b5b] flex flex-col"> */}
//     {/* Top Logo
//     <div className="mt-18 flex justify-center">
//       <p className="text-sky-500 text-4xl">Webinar</p>
//       <p className="text-white text-3xl">.gg</p>
//     </div> */}

//     {/* Center Content
//     <div className="flex flex-col items-center justify-center flex-grow">
//       <p className="text-white text-4xl mb-8">Let's Get Started</p>
//       <Input type="text" placeholder="Email id" />
//       <Button disabled={true}>Sign up</Button>
//     </div> */}
//   {/* </div> */}
