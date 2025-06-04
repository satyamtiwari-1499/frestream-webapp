import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import SignIn from './component/SignIn'
import SignUp from './component/SignUp'
import Player from './component/Player'
import Hero from './pages/Hero'
import Navbar from './component/Navbar'

const App = () => {
  
  return (
   <>
   <Navbar/>
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/titlecard2" element={<Hero/>}/>
      <Route path="/player/:id" element={<Player/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
   </>
  )
}

export default App