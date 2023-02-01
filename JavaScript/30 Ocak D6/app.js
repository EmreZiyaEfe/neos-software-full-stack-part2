// and (&&) veya ||



//Ornek

//instagram gşrşlş
// let kulaniciAdi = "emre.js"
// let sifre ="12345";

// let girilenKadi = prompt("Kullanıcı Adınız nedir");
// let girilenSifre = prompt("Sifreniz nedir?");

// if (girilenSifre == sifre && girilenKadi==kulaniciAdi) {
//     alert("Hosgeldin")
// }
// else {
//     alert("Kullanıcı Adın veya sifre Yanlıs");
// }


//kullanıcıdan yasini ve egitim durumunu iste
//18 yasıından buyuk ve lise mezunu olması grekmekte yapını

let yas = Number(prompt("Yas: "));
let egitim = prompt("Egitim: ");
let sabıka = prompt("Sabıkanız var mı ? e/h");

if (yas >= 18 && (egitim == "e" && sabıka=="h")) {
    console.log("Alabilirsin");
}

else {
    console.log("Alamazsınız");
}