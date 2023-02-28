// $("p").click(function (e) { 
//     e.preventDefault();
//     $(this).hide();
// });

// $("p").dblclick(function(){
//     $(this).css("color","red");
// });

// $("p").mouseenter(function () { 
//     console.log("mouse üzerine geldi");
// });

// $("p").mouseleave(function () { 
//     console.log("mouse dışarı çıktı");
// });

// $("p").mousedown(function () { 
//     console.log("p tagına tıklandı");
// });

// $("p").mouseup(function () { 
//     console.log("tıklama bırakıldı")
// });

// $("p").hover(function () {
//         // over
//         console.log("p elementine giriş yapıldı");
        
//     }, function () {
//         // out
//         console.log("p elementinden çıkış yapıldı");

//     }
// );

// $(".deneme").focus(function (e) { 
//     e.preventDefault();
//     $(this).css("background","red");
//     $(this).css("width","250px");
// });

// $(".deneme").blur(function (e) { 
//     e.preventDefault();
//     $(this).css("background","white");
//     $(this).css("width","100px");
// });

// $(".buton").click(function (e) { 
//     e.preventDefault();
//     let x = $("p").html(); //text
//     $("p").html("<b>yazı degişti</b>");
//     console.log(x);
// });


// $(".buton").click(function (e) { 
//     e.preventDefault();
//     $("p").append("yazi eklendi");
// });

// $(".buton").click(function (e) { 
//     e.preventDefault();
//     $(".listem").append("<li>yeni liste</li>");
// });

// $(".buton").click(function (e) { 
//     e.preventDefault();
//     $(".listem").prepend("<li>yeni liste</li>");
// });


// $(".buton").click(function (e) { 
//     e.preventDefault();
//     $("p").before("eklendi");
//     $("p").after("eklendi");
// });

// $(".buton").click(function (e) { 
//     e.preventDefault();
//     $(".test").remove();
// });

// $(".buton").click(function (e) { 
//     e.preventDefault();
//     $(".icerik").empty();
// });

$(".buton").click(function (e) { 
    e.preventDefault();
    // $("h1").addClass("red");
    $("h1").removeClass("red");
});