import React from 'react'
import '../App.css'
import Odev from './Odev'
function Odevler() {
  return (
    <div className='odevler'>
        <h3>Ödevler</h3>
        <Odev odevad={"Aydın Kimya - Asit ve Bazlar"} odevsuresi={2} odevtarihi={"4/09/2025"} ogretmenad={"Hülya Ersoy"}/>
        <Odev odevad={"3D Matematik - Polinomlar"} odevsuresi={3} odevtarihi={"5/08/2025"} ogretmenad={"Hülya Ersoy"}/>
        <Odev odevad={"Palme Biyoloji - DNA Replikasyonu"} odevsuresi={5} odevtarihi={"6/03/2025"} ogretmenad={"Hülya Ersoy"}/>
        <Odev odevad={"Okyanus Fizik - Maddenin Halleri"} odevsuresi={6} odevtarihi={"4/03/2025"} ogretmenad={"Hülya Ersoy"}/>
        <Odev odevad={"3D Fizik - Maddenin Halleri"} odevsuresi={1} odevtarihi={"1/03/2025"} ogretmenad={"Hülya Ersoy"}/>
        <Odev odevad={"3D Fizik - Kuvvet"} odevsuresi={1} odevtarihi={"1/09/2025"} ogretmenad={"Hülya Ersoy"}/>
    </div>
  )
}

export default Odevler