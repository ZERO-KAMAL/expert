$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    loop: true,

    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
AOS.init();