import React from 'react'
import Odevozet from './Odevozet'
import '../App.css'
import Grafik from './Grafik'
import Duyurular from './Duyurular'
import Takvim from './Takvim'
function Anasayfa() {
  return (
    <div className="anasayfacontainer">
      <div className='anasayfa'>
      <div className='odevBolumu'>
        <h3 >Gönderilmemiş Ödevler</h3>
        <div className='odevozetler'>
        <Odevozet odevad={"Aydın Kimya - Asit ve Bazlar"} odevsuresi={2} odevtarihi={"4/09/2025"} ogretmenad={"Hülya Ersoy"} />
        <Odevozet odevad={"3D Matematik - Polinomlar"} odevsuresi={3} odevtarihi={"5/08/2025"} ogretmenad={"Hülya Ersoy"} />
        <Odevozet odevad={"Palme Biyoloji - DNA Replikasyonu"} odevsuresi={5} odevtarihi={"6/09/2025"} ogretmenad={"Hülya Ersoy"} />
        <Odevozet odevad={"Okyanus Fizik - Maddenin Halleri"} odevsuresi={6} odevtarihi={"4/03/2025"} ogretmenad={"Hülya Ersoy"} />
        <Odevozet odevad={"3D Fizik - Maddenin Halleri"} odevsuresi={1} odevtarihi={"1/03/2025"} ogretmenad={"Hülya Ersoy"} />
        <Odevozet odevad={"3D Fizik - Kuvvet"} odevsuresi={1} odevtarihi={"1/09/2025"} ogretmenad={"Hülya Ersoy"} />
        </div>
      </div>
      <div className='duyuruBolumu'>
        <Duyurular />
      </div>
    </div>
    <div className='anasayfa'>
      <div className='grafikBolumu'>
        <h3>Son Sınav Performanslarım</h3>
        <Grafik />
      </div>
      <div className='takvimBolumu'>
        <h3>Takvim</h3>
        <Takvim/>
      </div>
    </div>
    </div>
  )
}

export default Anasayfa