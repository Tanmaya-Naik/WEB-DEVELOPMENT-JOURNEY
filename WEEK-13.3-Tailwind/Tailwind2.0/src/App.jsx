import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SidebarTogle } from './components/icons/SidebarToggleicon'


const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};


function App() {
  const [sidebaropen,setsidebaropen]=useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  
    console.error(isDesktop)
    
    useEffect(() => {
      if (isDesktop == false) {
        setsidebaropen(false)
      } else {
        setsidebaropen(true)
      }
    }, [isDesktop])
  
  
  return (
    <div className='flex'>
      <Sidebar sidebaropen={sidebaropen} setsidebaropen={setsidebaropen}/>
      <MainContent/>
    </div>
  )
}




function Sidebar({sidebaropen,setsidebaropen}){
  if(!sidebaropen){
    return <div className='fixed  h-screen w-7 left-0'>
      <div className='cursor-pointer hover:bg-slate-200' onClick={()=>{
        setsidebaropen(!sidebaropen)
      }}>
        <SidebarTogle/>
      </div>
    </div>
  }[]

  return( 
  <div className='w-md h-screen bg-red-100'>
    <div>
      <div className='cursor-pointer hover:bg-slate-200' onClick={()=>{
        setsidebaropen(!sidebaropen)
      }}>
        <SidebarTogle/>

      </div>
    </div>

  </div>
  )
}


function MainContent(){
  return (
    <div className='w-full'>
      <div className='h-48 bg-black hidden md:block '></div>
    <div className='grid grid-cols-10 gap-6 p-8'>
      <div className='h-96 rounded-2xl shadow-lg bg-red-200 md:col-span-2 -translate-y-24 col-span-12 hidden md:block '></div>
      <div className='h-96 rounded-2xl shadow-lg bg-green-200 md:col-span-5 col-span-12'></div>
      <div className='h-96 rounded-2xl shadow-lg bg-yellow-200 md:col-span-3 col-span-12'></div>
    </div>
    </div>
  )
}

export default App
 