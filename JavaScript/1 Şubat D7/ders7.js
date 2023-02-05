//! else if()

// if (koşul) {
//     console.log("kod");
// }
// else if (koşul) {
//     console.log("kod");
// }
// else if (koşul) {
//     console.log("kod");
// }
// else if (koşul) {
//     console.log("kod");
// }
// else {
//     console.log("kod");
// }


//* Kullanıcının ortalamasına göre karne ortalaması verin
// let ort = Number(prompt("Ortalama giriniz"));

// if (ort>0 && ort<20) {
//     console.log("Not = 1");
// }

// else if (ort>=20 && ort<45) {
//     console.log("Not = 2");
// }

// if (ort<20) {
//     console.log("Not = 1");
// }

// else if (ort<45) {
//     console.log("Not = 2");
// }

// else if (ort<65) {
//     console.log("Not = 3");
// }

// else {
//     console.log ("yanlış ortalama girdiniz");
// }

// let lastik = Number(prompt("Lastik sorunu"));
// let durum = prompt("Lastik durumu");

// if (lastik == 1 && durum == "p"){
//     console.log("yavaşla");
// }
// else if (lastik == 1 && durum == "h") {
//     console.log("sürmeye devam")
// }
// else if (lastik == 2  && durum == "h") {
//     console.log("havasını doldur");
// }
// else if (lastik == 2  && durum == "p") {
//     console.log("yavaşla");
// }
// else {
//     console.log("yanlış girdiniz")
// }



//*girilen iki sayının hangisinin büyük olduğunu bulunuz
// let x = Number(prompt("sayı 1:"));
// let y = Number(prompt("sayı 2:"));

// if (x>y){
//     console.log("x>y")
// }
// else if (x==y) {
//     console.log("saylar eşit")
// }
// else{
//     console.log("y>x")
// }

//*girilen sayının kaç basamaklı olduğunu bulun
// let sayi = Number(prompt("Sayı girin"));
// if (sayi>0) {
//     sayi = sayi /10;
//     console.log(`${sayi} basamaklı`);
// }



//*100lük sistemde girilen notu 5lik sisteme çevirin (87 => 5)
// let not = Number(prompt("Not girin"))
// if(not < 45){
//     console.log("1")
// }
// else if (not < 55){
//     console.log("2")
// }
// else if (not < 69){
//     console.log("3")
// }
// else if (not < 84){
//     console.log("4")
// }
// else {
//     console.log("5")
// }


//*alınan iki sayının girilen harfe göre dört işlem yapan uygulamayı yazınız
//* örn =  toplama = t

// let sayi1 = Number(prompt("Sayı gir"));
// let sayi2 = Number(prompt("sayı2 gir"));
// let harf = prompt("harf");

// if(harf == "t") {
//     console.log(sayi1 + sayi2);
// }
// else if(harf == "e"){
//     console.log(sayi1 - sayi2);
// }

// else if(harf == "c"){
//     console.log(sayi1 * sayi2);
// }
// else if(harf == "b"){
//     console.log(sayi1 / sayi2);
// }
// else {
//     console.log("dogru deger gir");
// }
/*
*Kullanıcıya sinema ya da tiyatro tercihi sorulsun.
*Sinema izlemek için 50 TL,
*tiyatro için 100 TL ödenmesi gerekmedir.
*Öğrencilere % 50 indirim yapıldığı düşünülerek
*öğrenci ise indirim yapılan
*öğrenci değilse indirimsiz tutarı
*hesaplayarak ekrana yazdıran kodu yazınız.
*/

// let tercih = prompt("tercihi girin");
// let kim = prompt("Ögrenci veya normal");
// let sonuc;
// if (kim == "o" && tercih == "s") {
//     sonuc = 50 * 0.5;
//     console.log(sonuc);
// }
// else if (kim == "o" && tercih == "t") {
//     sonuc = 100 * 0.5;
//     console.log(sonuc);
// }
// else if (kim == "n" && tercih == "s") {
//     sonuc = 50 * 1;
//     console.log(sonuc);
// }
// else if (kim == "n" && tercih == "t") {
//     sonuc = 100 * 1;
//     console.log(sonuc);
// }
// else{
//     console.log("dogru deger gir");
// }
//*bir sisteme girişte or kullanarak kullanıcı adı veya şifre yanlışsa
//*ekrana "kullanıcı adı veya şifre yanlış" yazdırınız

// let kadi = "emre";
// let sifre = "efe";
// let kgirilen = prompt("kullanıcı adını girin");
// let sgirilen = prompt("sifre girin");
// if (kadi != kgirilen || sifre != sgirilen) {
//     console.log("kullanıcı adı ve ya şifre yanlış");
// }
// else 
// {
//     console.log("Hoş geldiniz");
// }


//*Kullanıcının girdiği 3 sayının en büyük sayısını bulun
// let x = Number(prompt("1. sayı"));
// let y = Number(prompt("2. sayı"));
// let z = Number(prompt("3. sayı"));

// if (x>y && x>z) {
//     console.log("x en büyük");
// }
// else if (y>x && y>z) {
//     console.log("y en büyük");
// }
// else if (z>x && z>y) {
//     console.log("z en buyuk");
// }

//*Bir kişi mağazadan 100 TL ve üzeri alışveriş yaparsa %10 indirim, 200 TL ve üzeri alışveriş
//*yaparsa *%15 indirim, 300 TL ve üzeri alışveriş yaparsa %20
//*indirim kazandığını ve ödeyeceği miktarı ekrana yazınız

// let alısVeris = Number(prompt("Miktarı girin"));
// let tutar;
// if (alısVeris >= 100 && alısVeris <= 199) {
//     tutar = alısVeris - (alısVeris * 0.1);
//     console.log(`%10 indirim kazandınız. alışveriş tutarı: ${tutar}`);
// }
// else if (alısVeris == 200 && alısVeris <=299) {
//     tutar = alısVeris - (alısVeris * 0.15);
//     console.log(`%15 indirim kazanadınız. alışveriş tutarı: ${tutar}`);
// }
// else if (alısVeris >= 300) {
//     tutar = alısVeris - (alısVeris * 0.2);
//     console.log(`%20 indirim kazandınız. alışveriş tutarı: ${tutar}`);
// }
// else {
//     console.log(`alışveriş tutarı: ${alısVeris}`);
// }

//*basit bir bankamatik uygulaması oluşturunuz
//*kullanıcıdan bir şifre alınız şifre doğru olduğu taktirde 
//*işlemler alanlarına yöneltilsin
//*para çekme ve para yatırma işlemleri yapılsın

let sifre = Number(prompt("şifrenizi giriniz: "));
let bakiye = 1000;
if (sifre == 1234) {
    console.log("Şifre dogru yapmak istediğiniz işlemi seçin");
    let deger = prompt("işleminiz: ");
    if (deger == "ç") {
        let para = Number(prompt("çekilecek tutarı girin"));
        bakiye = bakiye - para;
        console.log(`Çekilen Miktar : ${para} , Kalan bakiye: ${bakiye}`);
    }
    else if (deger == "y") {
        let para = Number(prompt("yatırılıcak tutarı girin: "));
        bakiye = bakiye + para;
        console.log(`yatırılan miktar : ${para} , Toplam bakiye: ${bakiye} `);
    }
}
else {
    console.log("lütfen şifreyi tekrar giriniz");
}