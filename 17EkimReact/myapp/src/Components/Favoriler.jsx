import React from 'react'
import AlisverisCard from './AlisverisCard'

function Favoriler() {
  return (
    <div className="parent">
        <AlisverisCard 
        image="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
        title="Çalışma Masası"
        text="Açıklama var"
        price="500₺"
        />
        <AlisverisCard 
        image="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
        title="Telefon"
        text="Açıklama var"
        price="1500₺"
        />
        <AlisverisCard 
        image="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
        title="Laptop"
        text="Açıklama var"
        price="20000₺"
        />
    </div>
  )
}

export default Favoriler