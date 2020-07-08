$(document).ready(function(){
  $('.menu-toggle').on('click', function(){
      $('.nav').toggleClass('showing');
      $('.nav ul').toggleClass('showing');
  });

  $('.post-wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      nextArrow: $('.next'),
      prevArrow: $('.prev'),
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
  });
  
});
$('.owl-carousel').owlCarousel();
// $(document).ready(function(){
//     $('.menu-toggle').on('click', function(){
//         $('.nav').toggleClass('showing');
//         $('.nav ul').toggleClass('showing');
//     });
//     $('.carousel').carousel('pause');
//     // $('.carousel').slick({
//     //     slidesToShow: 3,
//     //     slidesToScroll: 1,
//     //     autoplay: false,
//     //     autoplaySpeed: 1000,
//     //     nextArrow: $('.next'),
//     //     prevArrow: $('.prev'),
//     //     responsive: [
//     //         {
//     //           breakpoint: 1024,
//     //           settings: {
//     //             slidesToShow: 3,
//     //             slidesToScroll: 3,
//     //             infinite: true,
//     //             dots: true
//     //           }
//     //         },
//     //         {
//     //           breakpoint: 700,
//     //           settings: {
//     //             slidesToShow: 2,
//     //             slidesToScroll: 2
//     //           }
//     //         },
//     //         {
//     //           breakpoint: 580,
//     //           settings: {
//     //             slidesToShow: 1,
//     //             slidesToScroll: 1
//     //           }
//     //         }
//     //       ]
//     // });

//     $('.one-slider').slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: false,
//       fade: true,
//       asNavFor: '.slider-nav'
//     });
//     $('.post-wrapper').slick({
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       asNavFor: '.slider-for',
//       dots: true,
//       centerMode: true,
//       focusOnSelect: true
//     });

//     $('.first-button').on('click', function () {

//       $('.animated-icon1').toggleClass('open');
//     });
//     $('.second-button').on('click', function () {
  
//       $('.animated-icon2').toggleClass('open');
//     });
//     $('.third-button').on('click', function () {
  
//       $('.animated-icon3').toggleClass('open');
//     });
    
// });
