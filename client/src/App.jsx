import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Nav from './component/Nav'
import Footer from './component/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'


const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner")

  return (
    <div>
      {!isOwnerPath &&<Nav/>}
      <div className='min-h-[70vh]'>
       <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/rooms' element={<AllRooms/>} />
        <Route path='/rooms/:id' element={<RoomDetails/>} />
        <Route path='/my-bookings' element={<MyBookings/>} />
       </Routes>
       <Footer/>
      </div>
    </div>
  )
}

export default App