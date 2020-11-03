$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
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