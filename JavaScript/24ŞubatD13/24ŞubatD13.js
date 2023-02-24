// let emre = document.querySelector(".emre")

// let emre = $(".emre");
// console.log(emre);


//?sayfa hazır oldugunda tetiklenecek olay

// $(document).ready(function(){
//     alert("sayfa hazır");
// })


// $(".tikla").click(function(){
//     console.log("test")
// });


//? hide örneği
// $(".tikla").click(function(){
//     $("p").hide(1000); //!milisaniye ile animasyonlu yok oluyor
// });

//? show

// $(".tikla").click(function(){
//     ${"p"}.show(2000);
// })


//?toggle

//  $(".tikla").click(function(){
//      $("p").toggle(1000);
//  });

//? fadeIn

// $(".tikla").click(function (e) { 
//     e.preventDefault();
//     $("p").fadeIn(4000);
// });


//fadeOut

// $(".tikla").click(function (e) { 
//     e.preventDefault();
//     $("p").fadeOut(1000);
// });

// $(".tikla").click(function (e) { 
//     e.preventDefault();
//     $("p").fadeToggle(1000);
// });



//?slideDown

// $(".tikla").click(function (e) { 
//     e.preventDefault();
//     $("p").slideDown("slow");
// });


//?slideUp

// $(".tikla").click(function (e) { 
//     e.preventDefault();
//     $("p").slideUp("slow");
// });

//? slideToggle

// $(".tikla").click(function (e) { 
//     e.preventDefault();
//     $("p").slideToggle("slow");
// });

$(".hareket").click(function (e) { 
    e.preventDefault();
    $(".box").animate({
        left:"200px"
    })
});