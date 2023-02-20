//! Fonksiyonlar

//* Yapılacak işlem bir kez oluşturulur ve daha sonra nerede bu işlemi yapmak istiyorsak orada kullanılır


// function mesajVer() {
//     console.log("selam!");
// }

// mesajVer();

//? buton ile mesaj ver

// function mesaj() {
//     alert("Merhaba");
// }


//? örnek
// function sorgu() {
//     let isim = prompt("isminiz nedir?");
//     console.log(isim);
// }

// for (let i = 0;i < 3;i++ ) {
//     sorgu();
// }

//!parametre
// function mesajGoster(isim,soyisim) {
//     alert(isim + " " + soyisim);
// }

// mesajGoster("emre", "efe");
// mesajGoster("ziya", "efe");


//!DOM

//*byId id ye göre element seçer

// let paragraf = document.getElementById("myP").innerHTML;
// console.log(paragraf);

//*className classa göre seçer
//!dikkat edilmesi gereken clasName dizi halinde döner
// let paragraf = document.getElementsByClassName("myP");
// console.log(paragraf[0]);

//*querySelector()

//? id ve classa göre seçim yapılır
// let paragraf = document.querySelector("#myId");
// console.log(paragraf);

//? innerHTML
//*tag içerisindekş yazıyı verir

// let paragraf = document.querySelector("#myId").innerHTML;
// console.log(paragraf);

//?innerText

//  let paragraf = document.querySelector("#myId").innerText;
//  console.log(paragraf);

// function sepetVeri() {
//     document.querySelector(".sepet").innerHTML = "<b>Sepete ürün eklendi</b>";
// }


//!value
//*value bizim iççin inputtan girilen degerleri çekmemize yarar
// function islem() {
//     let girilenDeger = document.querySelector(".ad").value;
//     console.log(girilenDeger);
// }

function yas() {
    let girYas = Number(document.querySelector(".yas").value);
    
    if (girYas >= 18) {
        document.querySelector(".sonuc").innerHTML="reşit";
    }
    else {
        document.querySelector(".sonuc").innerHTML="değil";
    }
}