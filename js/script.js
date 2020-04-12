



$('.slid-banner').slick({
  dots: true,
  infinite:true,
  speed:1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  autoplay:true,
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// ============== Venubox javascript=====================
$(document).ready(function(){
  $('.venobox').venobox(); 
});
// // COUNTER-UP STYLE JS---------START----------------------

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

// ===========COLORFULL-TAB-===========
$("#colorful").colorfulTab(); 
// ======slick-slider-logo============

$('.logo').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:'<i class="fas fa-angle-left prev"></i>',
  nextArrow:'<i class="fas fa-angle-right next"></i>',
});