//!array(diziler)


//?birden fazla degeri degiskene atmak icin kullanilir
//let sayilar = 26,55,12,49 //!hata

// let sayilar = [1, 2, 3, 4];
// console.log(sayilar)


// let isimler = ["emre", "ziya", "efe"];
// console.log(isimler)

// let rastgeleIcerik = [1, "emre", 26, "elma", "60", "armut", 89];
// console.log(rastgeleIcerik)

//? liste içerisnde veriye ulaşma
// let rastgeleIcerik = [1, "emre", 26, "elma", "60", "armut", 89];
// console.log(rastgeleIcerik[1]) //* array içerisinde elemanlar index numarası ile çagirilir

//!obje
// let araba = {
//     marka: "volvo",
//     model: "xc60",
//     yil: 2020,
//     km: 10000,
//     renk: "kırmızı"
// }

// console.log(araba.yil)


// let urunler = {
//     çokonat : 24,
//     büsküvi : 10,
//     dondurma : 23,
//     cips : 13
// }

// console.log(urunler.çokonat, urunler.büsküvi)

//!değişken yazdırma yöntemleri
//?console.log()
// let isim = "emre";
// console.log(isim)

//? document.write()
// document.write(isim)

//? alert()
// alert(isim)

// alert("emre ziya efe")
// console.log("emre")


//? örnek
// let isim = "emre";
// console.log(isim);

// let yas = 26;
// alert(yas);

// let meslek = "mühendis";
// document.write(meslek);

//! aritmetik operatorler

//? (++++++++++)
// let sayi1 = 26;
// let sayi2 = 34;
// console.log(sayi1+sayi2)

// let isim = "emre";
// let soyisim = "efe";
//console.log(isim-soyisim); //! NaN (Not a number)

// let sinav1 = 65;
// let sinav2 = 78;

// let sonuc = sinav1 + sinav2;

// console.log(sonuc)


let sinav1 = 50;
let sinav2 = 50;
let ortalama = (sinav1 + sinav2 ) / 2;
console.log("ortalama : " ,ortalama);


//? (------)
// let sayi1 = 100;
// let sayi2 = 50;
// let sonuc2 = sayi1 - sayi2;
// console.log("Sonuç:" ,sonuc2);


// let isim = "Emre";
// let soyisim = "efe";
// let sonuc3 = soyisim - isim;
// console.log(sonuc3); //!hata

let sayi1 = 20;
let z = 10;
let sonuc = 40 - sayi1 + z;
console.log(sayi1);