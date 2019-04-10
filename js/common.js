
  
$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
    $('#btn-header, #btn-header1, #btn-header2, #btn-header3').click( function(event){ // лoвим клик пo ссылки с id="go"
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function(){ // пoсле выпoлнения предъидущей aнимaции
                $('#popup') 
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                    .animate({opacity: 1}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
        });
    });
    /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
    $('#overlay, .btns-form').click( function(){ // лoвим клик пo крестику или пoдлoжке
        $('#popup')
            .animate({opacity: 0}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
    });
});

$(document).ready(function(){
 $(function() {
    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("#callback-form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Спасибо большое за заказ! Мы свяжемся с Вами в ближайшее время!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

        $("#footer-input").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Спасибо большое за заказ! Мы свяжемся с Вами в ближайшее время!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

$("#checkbox3").hover(function() {
    $(this).toggleClass("cor");
});

$("#checkbox3").click(function() {
    $(this).toggleClass("on");
    $(".dropdonw-menu-mobile").toggleClass("move");
});
$(".mainMenu").click(function() {
    $('#checkbox3').trigger('click');
});

});


$('.carusel').slick({
    dots:false,
    slidesToShow: 2,
    arrows:    true,
   slidesToScroll: 1,
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 3,
        centerMode: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3,
        centerMode: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToShow: 1,
      }
    }
  ]
});

$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
});



$(window).scroll(function () {if ($(this).scrollTop() > 0) {$('#back-to-top').fadeIn();} else {$('#back-to-top').fadeOut();}});
$('#back-to-top').click(function () {$('body,html').animate({scrollTop: 0}, 400); return false;});


$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
    $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

  var secondAnimation = function(){         
    $('.box:eq(0)').delay(1000).animate({opacity:1},'slow', function(){

    });
    $('.box:eq(1)').delay(2000).animate({opacity:1},'slow', function(){

    });
    $('.box:eq(2)').delay(3000).animate({opacity:1},'slow', function(){

    });

  };
//1 блок
$("#open-dropdown-btn").hover(function() {
    $(this).toggleClass("cor");
});

$("#open-dropdown-btn").click(function() {
    $(this).toggleClass("on");
    $("#open-dropdown-1").toggleClass("move");
});

//2 блок
$("#open-dropdown-btn-2").hover(function() {
    $(this).toggleClass("cor");
});

$("#open-dropdown-btn-2").click(function() {
    $(this).toggleClass("on");
    $("#open-dropdown-2").toggleClass("move");
});

//3 блок
$("#open-dropdown-btn-3").hover(function() {
    $(this).toggleClass("cor");
});

$("#open-dropdown-btn-3").click(function() {
    $(this).toggleClass("on");
    $("#open-dropdown-3").toggleClass("move");
});

});