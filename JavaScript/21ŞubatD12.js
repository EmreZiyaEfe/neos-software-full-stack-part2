
// let myArray = [
//     {
//         kadi:"emre",
//         sifre:"123"
//     },
//     {
//         kadi:"ziya",
//         sifre:"123"
//     },
//     {
//         kadi:"efe",
//         sifre:"123"
//     }
// ]

//     localStorage.setItem("kullanicilar",JSON.stringify(myArray));

myDizi = JSON.parse(localStorage.getItem("kullanicilar"));

 function girisYap() {
    let girilenKadi = document.querySelector(".kadi").value;
    let girilenSifre = document.querySelector(".sifre").value;

  for (let i=0;i<myDizi.length;i++) {
    if (myDizi[i].kadi == girilenKadi && myDizi[i].sifre == girilenSifre) {
        sonucKont = true;
        break;
    }

    else {
        sonucKont = false;
    }
    if (sonucKont == true) {
        alert("Hoşgeldin");
    }
    else if (sonucKont == false) {
        alert("Yanlış giriş yaptın");
    }
    
}

}


// let myDizi = [
//   {
//     kadi:"mehmet",
//     sifre:"123"
//   },
//   {
//     kadi:"semra",
//     sifre:"456"
//   },
//   {
//     kadi:"rojin",
//     sifre:"789"
//   }
// ];

// localStorage.setItem("kullanicilar",JSON.stringify(myDizi))


// let kisiler = JSON.parse(localStorage.getItem("kullanicilar"));

// console.log(kisiler)
// function girisYap(){
//   let girilenKadi = document.querySelector(".kadi").value;
//   let girilenSifre = document.querySelector(".sifre").value;
//   for (let i=0;i<kisiler.length;i++){
//     if (kisiler[i].kadi==girilenKadi && kisiler[i].sifre==girilenSifre){
//       girisKont = true;
//       localStorage.setItem("girisOnay",girilenKadi);
//       break;
//     }
//     else{
//       girisKont = false;
//     }
//   }
//   if (girisKont==true){
//     var girisOnay = localStorage.getItem("girisOnay");
//     var url = "anasayfa.html?myVariable=" + girisOnay;
//     window.location.href = url;
//   }
//   else{
//     console.log("kaybol"); 
//   }
// }

// try{
//   document.addEventListener("DOMContentLoaded",function(){
//     var urlParams = new URLSearchParams(window.location.search);
//     var myVariableFromFirstPage = urlParams.get('myVariable');
//     document.querySelector(".test").innerHTML="Hoşgeldiniz!" + " " +myVariableFromFirstPage;
//   });
// }
// catch{
//   console.log("veri yok")
// }
