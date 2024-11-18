import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Paste from './Components/Paste'
import Viewpaste from './Components/Viewpaste'

const router= createBrowserRouter(
  [
    {
     path:"/",
    element:<div className='w-full h-screen flex flex-col bg-[#94a3b8]'>
            <Navbar/>
            <Home/>
           </div>
    },
    {
      path:"/pastes",
      element:<div className='w-full h-screen flex flex-col bg-[#94a3b8]' > 
             <Navbar/>
             <Paste/>
            </div>

    },
    {
    path:"/pastes/:id",
    element:<div className='w-full h-screen flex flex-col bg-[#94a3b8]' >
          <Navbar/>
          <Viewpaste/>
           </div>

    }
  ]
)




function App() {
  

  return (
   <RouterProvider  router={router}/>
  )
}

export default App
