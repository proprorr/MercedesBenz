$(function(){
   $('.design-slider').slick({
      dots: false,
      slidesToShow: 4,
      variableWidth: true,
      prevArrow: '<img class="arrow arrow-left" src="images/left.svg" alt="">',
      nextArrow: '<img class="arrow arrow-right" src="images/right.svg" alt="">',
      responsive:[
         {
            breakpoint: 361,
            settings: {
               variableWidth: false,
               slidesToShow: 1
            }
         }
      ]
   });
});