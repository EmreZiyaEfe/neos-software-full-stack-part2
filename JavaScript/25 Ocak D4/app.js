//? Bolme operatoru

// let sayi1 = 40;
// let sayi2 = 20;
// let sonuc = sayi1 / sayi2;
// console.log(sonuc);

// let isim = "emre";
// let soyisim= "efe";
// let sonuc = isim / soyisim;
// console.log(sonuc); //!nan


//? Ornekler
// let sayi1 = 10;
// let sayi2 = 20;

// let sonuc = sayi1 + sayi2 + 1;
// console.log(sonuc);


// let sayi3 = 10;
// let sonuc = 5 * sayi3;
//! sayi3 = sayi3 * 5;
//! console.log(sayi3); 
// console.log(sonuc); 


// let ad= "emre";
// let soyad =  "efe"
// let yas = 26;
// console.log(`Merhaba benim adim :${ad} ve soyadim: ${soyad} ben ${yas}  yasindayim`)

//? mod almak 
//* mod almak bolumden kalani verir
//console.log(15%2);

// console.log(10%2);

// let say1 = 45;
// let say2 = 5;
// let sonuc = say1 % say2
// console.log(sonuc) 

//!atama işlemleri
// let say1 = 45;
// say1 = say1 + 10;
// console.log(say1); 

// let sayi1 = 10;
// sayi1 += 10; //?sayi = sayi + 10
// console.log(sayi1); 

// let say1 = 20;
// let say2 = 30;
// say2 = say2 - say1;
// console.log(say2);

// let say1 = 20;
// say1 = say1 - 30;
// console.log(say1);

// let test = 20;
// test -= 5;
// console.log(test);

// let x = 10;
// let y = 20;
// x += y 
// console.log(x)

// let x = 10;
// x += 3;
// console.log(x);

//!Prompt komutu
//?prompt kullanıcıya bir mesaj iletir
//?karsılıgında bir cevap bekler
// prompt('Yaşınızı girin :')

// let girilenIsim = prompt("Adınızı girin : ");
// console.log("Hoşgeldin", girilenIsim);


//?promptdan gelen degerler her zaman stringdir
// let girilenSayi = prompt("Yaşınızı girin :")
// console.log(girilenSayi);

// let sayi = Number("23");
// console.log(sayi+10)

// let girilenYas = Number(prompt('Yaşınızı Girin :'))
// console.log(girilenYas+10)

// let x = Number(prompt("Sayı girin:"));
// kare = x * x //? x**2 üssü x**3 
// console.log(kare);

// let x = Number(prompt("x: "));
// let y = Number (prompt("y: "));
// let z = Number (prompt("z: "));

// carpim = x * y;
// mod= carpim % 2;
// mod = mod + z;
// console.log(mod);
//let sonuc = ((x*y) %2) + z; //? 3 satırı tek satırda yazabiliyoruz
//console.log(sonuc);

let x = Number(prompt("x: "));
let y = Number (prompt("y: "));
let z = Number (prompt("z: "));

sonuc = (x+y+z) / 3;
console.log(sonuc)


