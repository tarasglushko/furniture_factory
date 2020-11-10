$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: false,
        margin:8,
        responsive:{
            0:{
                items:1,
                nav:true
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
                    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                    return false;
            });
    });

  

    