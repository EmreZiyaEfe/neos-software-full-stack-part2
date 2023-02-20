// birden 10 a kadar olan sayıları ekrana yazdırın.

// 1 den 50 ye kadar olan çift sayıları Console’a yazdırınız.

// var listem = [13,23,12,45,22,48,66,100]

// for döngüsü ile çift sayıları yazdırma

// 1-100 arası 3 ve 5 e tam bölünen sayılar




// let i = 0;
// while (i<10){
//     console.log(i);
//     i++;
// }

// let i = 0;
// while (true) {
//     console.log(i);
//     i++;
// } 

// let i = 0;
// while (true) {
//     if (i == 10 ) {
//         break;
//     }
//     console.log(i);
//     i++;
// } 

//! dizi içerisindeki verilere nasıl ulaşılabilir
// sehirler = ["istanbul","ankara","izmir"];
// for (let i=0; i<sehirler.length;i++) {
//     console.log(sehirler[i]);
// }

//!random()

// rastgele = Math.round(Math.random() * 10);
// console.log(rastgele);

// rastgeleDeger = Math.round(Math.random() * 10);
// girilenDeger = Number(prompt("Deger girin"));
// if (rastgeleDeger == girilenDeger) {
//     alert("dogru tahmin");
// }
// else {
//     alert("yanlış tahmin");
// }

//?sayı tahmin oyunu
// rastgeleDeger = Math.round(Math.random() * 10);

// let i=0;
// while (true) {
//     girilenDeger = Number(prompt("Deger girin"));
//     if (girilenDeger == rastgeleDeger) {
//         alert("dogru tahmin");
//         break;
//     }
//     else {
//         alert("yanlış tahmin");
//     }
//     i++;
// }

//! localstorage

// let ad = "emre";
// localStorage.setItem("ad",ad); // setItem veri kaydeder ve kaydedilen veriyi güncelleyebilir

// kullaniciAdi = localStorage.getItem("ad"); //getItem veriyi çeker
// console.log(kullaniciAdi);


//?örnekler

//* kullanıcı adıevşifre degerleri oluşturup locale kayıt ediniz daha sonra kullanıcı adını ve şifresini sorunuz
//*localden alınan bilgiler ile girileni karşılaştırın
// localStorage.setItem("kullaniciadi","emre");
// localStorage.setItem("sifre","123");

girilenKadi = prompt("Kullanıcı adı girin");
girilenSifre = prompt("Şifrenizi girin");

kadi = localStorage.getItem("kullaniciadi");
sifre = localStorage.getItem("sifre");

if (girilenKadi == kadi && girilenSifre == sifre) {
    alert(`HosGeldiniz ${kadi}` )
}
else{
    alert("yanlış girdiniz");
}