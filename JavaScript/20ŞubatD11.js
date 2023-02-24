// function tikla() {
//     let x = Number(document.querySelector(".test").value);
//     console.log(x);
// }

//!css işlemleri

// function renk(){
//     document.querySelector(".emre").style.display="none";
// }

// function renk(){
//     document.querySelector(".emre").style.color="red";
// }



//?örnek

// function hesapla() {
//     let sinav1 = Number(document.querySelector(".sinav1").value);
//     let sinav2 = Number(document.querySelector(".sinav2").value);
    
//     let sonuc = (sinav1 + sinav2) / 2;
//     let sonucDom = document.querySelector(".sonuc");
//     if (sonuc >= 50){
//     sonucDom.innerHTML = `Tebrikler Geçtin! Ortalama : ${sonuc}`;
//     sonucDom.style.color = "green";
//   }
//   else {
//     sonucDom.innerHTML = `Malesef Kaldınız : Ortalama : ${sonuc}`
//     sonucDom.style.color = "red";
//   }
// }


//!localstrg

localStorage.setItem("isim","emre");
let isim = localStorage.getItem("isim");

