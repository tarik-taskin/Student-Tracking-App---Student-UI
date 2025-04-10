import { useState } from 'react'
import './App.css'
import Odevler from './Components/Odevler'
import { Routes, Route } from 'react-router-dom'
import Denemeler from './Components/Denemeler'
import Dersler from './Components/Dersler'
import Anasayfa from './Components/Anasayfa'
import Header from './Components/Header'
function App() {

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Anasayfa/>}></Route>
        <Route path='/odevlerim' element={<Odevler />}></Route>
        <Route path='/derslerim' element={<Dersler />}></Route>
        <Route path='/denemeler' element={<Denemeler/>}></Route>
      </Routes>
    </div>
  )
}

export default App
