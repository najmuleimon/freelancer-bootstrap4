$(function () {
    "use srtict";
//tooltip js  
  $('[data-toggle="tooltip"]').tooltip();

//review-slider
    $('.review-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: '<i class="fa fa-chevron-left leftbtn"></i>',
        nextArrow: '<i class="fa fa-chevron-right rightbtn"></i>',
        autoplay: true,
        speed: 1000,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//service slider
    $('.service-slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
    dots: true,
    arrows: true,
        prevArrow: '<i class="fa fa-chevron-left leftbtn"></i>',
        nextArrow: '<i class="fa fa-chevron-right rightbtn"></i>',
    autoplay: true,
    speed: 1000,
        centerMode: true,
      centerPadding: '0',
        slidesToShow: 3,
       slidesToScroll: 1,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
          slidesToScroll: 1,
          dots: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
          dots: false
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          dots: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//portfolio slide show 
    $('.popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
    });
});