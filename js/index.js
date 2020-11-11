$(document).ready(function(){
     $('.popup-btn').on('click' , function(event) {
       event.preventDefault();
       $('.popup').fadeIn();
    });
    $('.popup-close').on('click' , function(event) {
        event.preventDefault();
        $('.popup').fadeOut();
    });
    $(".owl-carousel").owlCarousel({
        loop: false,
        margin:8,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            }
        } 
    });
  });

    $(function(){
            $("a[href^='#']").click(function(){
                    var _href = $(this).attr("href");
                    $("html, body").animate({scrollTop: $(_href).offset().top -130 +"px"},1000);
                    return false;
            });
    });

  

    