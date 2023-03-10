import React from 'react'
import { useState } from 'react'


const kirmizi = {background:"red"};
const yesil = {background:"green"};


function UseState() {
        // const[car,setCar] = useState("bmw")
        // let[ad,setAd] = useState("emre");
        // let[soyad,setSoyad] = useState ("efe");
        // let[yas,setYas] = useState(26);

        // let[sayi,setSayi] = useState(1);

        const[color,setColor] = useState(kirmizi)

    return (
    <div>
        {/* <h2>Araba Modeli {car} </h2> */}
        {/* <h2>Selam! Benim adım {ad}, soyadım {soyad}, yaşım{yas}</h2> */}
        {/* <h3>Selam benim adım {ad}</h3> */}
        {/* <button onClick={ () => setAd("Ziya")}>Veriyi Güncelle</button> */}
        {/* <h4>Sepetteki ürün sayısı {sayi} </h4> */}
        {/* <button onClick={ () => setSayi(sayi + 1)}>Sepete Ürün Ekle</button> */}

        {/* <h1 style={color} onMouseEnter = {() => setColor(yesil)}>Emre Ziya Efe </h1>
        <h3 style={color}>emre</h3> ????????? */}

        <h1 style={color}>Emre Efe</h1>
        <button onClick={() => setColor(yesil)}>Renklendir</button>
    </div>
  )
}

export default UseState