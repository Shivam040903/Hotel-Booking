import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Nav from './component/Nav'
import Footer from './component/Footer'


const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner")

  return (
    <div>
      {!isOwnerPath &&<Nav/>}
      <div className='min-h-[70vh]'>
       <Routes>
        <Route path='/' element={<Homepage/>} />
       </Routes>
       <Footer/>
      </div>
    </div>
  )
}

export default App