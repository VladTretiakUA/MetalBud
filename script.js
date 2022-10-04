$(document).ready(function(){
  $("#slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<div class="arrow-prev"><i class="fas fa-arrow-left"></i></div>',
    nextArrow: '<div class="arrow-next"><i class="fas fa-arrow-right"></i></div>'
  });
});
