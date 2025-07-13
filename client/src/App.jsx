import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './component/navbar'

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner")

  return (
    <div>
      {!isOwnerPath &&<Navbar></Navbar>}
      <div className='min-h-[70vh]'>
       <Routes>
        <Route path='/' element={<Homepage/>} />
       </Routes>
      </div>
    </div>
  )
}

export default App