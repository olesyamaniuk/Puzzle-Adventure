$(function () {
  $(".e-j-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: false,
    cssEase: "linear",
    prevArrow: ".e-j-gallery-list-left",
    nextArrow: ".e-j-gallery-list-right",
  });
});

$(function () {
  $(".e-j-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    cssEase: "linear",
    prevArrow: ".e-j-reviews-list-left",
    nextArrow: ".e-j-reviews-list-right",
  });
});
