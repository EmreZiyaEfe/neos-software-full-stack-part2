//? == esittir
//? != esit degil
//? > buyuktur
//? < kucuktur
//? <= kucuk esittir
//? >= buyuk esittir

/*
let yas = 14;
if (yas >= 18) {
    alert("Hosgeldin")
}

else {
    alert("Kaybol")
}*/

//*kullanicinin girdigi degere gore islem yapınız.

/*
let yas = Number(prompt("Yasınızı girin : "));
if (yas >= 18) {
    alert("Hosgeldin")
}

else {
    alert("Kaybol")
}
*/

// * yasi 20 olanlari siteye girebilsin diger yaslar giremesin

// let yas = Number(prompt("Yasınızı girin : "));
// if (yas == 20) {
//     alert("siteye girdin")
// }

// else {
//     alert("giremezsiniz")
// }

//* kullanicidan 3 sinav al, sinavlarin ort, 50 ve ustu gectigini 50 altinin kaldigini goster, mesaj içinde goster
/*
let sinav1 = Number(prompt("Sinav1 : "));
let sinav2 = Number(prompt("Sinav2 : "));
let sinav3 = Number(prompt("Sinav3: "));

let ort = (sinav1 + sinav2 + sinav3) /3;
if (ort >= 50) {
    console.log(`Ortalamanız: ${ort} Geçtiniz.`)
}

else {
    console.log(`Ortlamanız: ${ort} Kaldiniz`)
}
*/

//*kullanıcı yaşını kendisi girdiğinde reşit olup olmadığını bulalım
// let yas = Number(prompt("Yasinizi girin:"))
// if (yas >= 18) {
//     alert ("Reşit")
// }
// else{
//     alert("Reşit değil")
// }

//*kullanıcıdan alınan 2 sayının eşit olup olmadığı kontrol edilsin

// let x = Number(prompt("ilk sayi: "))
// let y = Number(prompt("ikinci sayi: "))
// if (x == y) {
//     alert("eşit")
// }
// else{
//     alert("değil")
// }



//*girilen iki sayının hangisinin büyük olduğunu bulunuz
// let sayi1 = Number(prompt("Sayi1: "));
// let sayi2 = Number(prompt("Sayi2: "));
// if(sayi1 > sayi2) {
//     alert("sayi1 sayı2'den büyüktür")
// }
// else {
//     alert("Sayi2 sayi1 den büyüktür")
// }

//*girilen sayının tekmi çiftmi olduğunu bulun

// let x = Number(prompt("Sayi: "));

// if (x % 2 == 0) {
//     alert(`${x} sayisi cifttir`)
// }

// else {
//     alert(`${x} tektir`)
// }


//*kullanıcıdan yaptığı alışveriş fiyatını alınız.
//*alışveriş fiyatı 100 lira altındaysa 15 TL kargo ücreti fiyata dahil edilsin
//*100 lira üstündeyse kargo ücreti alınmasın

let alisverisMiktar = Number(prompt("Alışveriş Miktarı"));
let kargoTutar = 15;
if (alisverisMiktar < 100) {
    alisverisMiktar += kargoTutar;
    alert(`Kargo tutarı tanımladı`);
}
else {
    alert("Toplam Tutar : " +alisverisMiktar);
}

//*kullanıcın girdiği vize ve final notlarının ortalamanı alınız
//*vize=40% final=60% (vize * 0.4 + final * 0.6)
//*vize ve final ortalaması sonucu kalan öğrencilerden büt notunuz sorunuz
//*büt notu sonucu yeniden ortalama alıp geçip kaldığını mesaj olarak veriniz!
//* vize=40% büt=60%

let vize = Number(prompt("Vize Notunuzu Girin: "));
let final = Number(prompt("Final Notunu Girin: "));
let ort = vize*0.4 + final*0.6;

if (ort<50){
    console.log(`Kaldınız ortalama ${ort}`)
    let but = Number(prompt("But Notunu Girin: "));
    ort = vize*0.4 + but*0.6;
    if (ort>=50) {
        console.log(`But ile gectiniz ${ort}`);
    }
    else {
        console.log(`But ile kaldınız ${ort}`);
    }
}
else {
    console.log(`Geçtiniz ortalama ${ort}`);
    


}



/*
let isim = "emre";
let soyisim = "efe";
let yas = 26;
console.log(`Merhaba ben ${isim} ${soyisim}. ${yas} yaşındayım`)
*/



