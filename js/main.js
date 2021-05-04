'use strict';

$(function(){

  $('.slider-products').slick({
    dots: false,
    slidesToShow: 4,
    prevArrow: '<button class="product-section__slider-btn product-section__slider-btnprev"><img src="img/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="product-section__slider-btn product-section__slider-btnnext"><img src="img/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });

});


$(function(){

  $('.news-slider').slick({
    dots: false,
    slidesToShow: 3,
    prevArrow: '<button class="news-slider-btn news-slider-btnprev"><img src="img/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="news-slider-btn news-slider-btnnext"><img src="img/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]

  });

});


//
$('.burger, .menu_mobile>li').click(function() {
  $('.burger').toggleClass('open');
  $('.menu_mobile').toggleClass('menu_active');
});
