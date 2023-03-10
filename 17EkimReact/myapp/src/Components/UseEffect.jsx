import React from 'react'
import { useState,useEffect } from 'react'


function UseEffect() {
    // const[sayi,setSayi] = useState(1);

    // useEffect(() => {
    //     console.log(`sayi ${sayi} değişti`);
    // },[sayi]);

    // const[mesaj,setMesaj] = useState("selam");

    // useEffect(() => {
    //     setTimeout(() => {
    //         setMesaj("veri değişti")
    //     },4000)
    // })

    // const[sayi,setSayi] = useState(0);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSayi((sayi) => sayi + 1)
    //     },1000);
    // })

    const[ekran,setEkran] = useState(window.innerWidth)

    const guncel = () => {
        setEkran(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize",guncel)
    })

  return (
    <div>
        {/* <h4>{sayi}</h4>
        <button onClick={() => {setSayi(sayi + 1)}}>Artır</button> */}

        {/* <h1>{mesaj}</h1> */}

        {/* <h2>{sayi}</h2> */}

        <h2>Su an bu ekrandasınız: {ekran}</h2>

    </div>
  )
}

export default UseEffect