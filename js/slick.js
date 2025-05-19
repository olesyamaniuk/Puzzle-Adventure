$(function () {
  $(".e-h-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".e-h-gallery-list-left",
    nextArrow: ".e-h-gallery-list-right",
  });
});

$(function () {
  $(".e-h-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    cssEase: "linear",
    prevArrow: ".e-h-reviews-list-left",
    nextArrow: ".e-h-reviews-list-right",
  });
});
