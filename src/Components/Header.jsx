import React from 'react'
import Drawer from './Drawer'
import { VscAccount } from "react-icons/vsc";
import '../App.css'
function Header() {
  return (
    <div className='header'>
      <Drawer />
      <h2>
        Ebu Eğitim
      </h2>
      <div className="headerRight">
        <p>
          Öğrenci Paneli
        </p>
        <VscAccount style={{ fontSize: "24px", marginRight: "20px" }} />
      </div>
    </div>
  )
}

export default Header