$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .menu").toggleClass("active");
    $("body").toggleClass("lock");
    $(".menu").toggleClass("open");
  });

  $(".menu__link").click(function (event) {
    $(".header__burger, .menu").removeClass("active");
    $("body").removeClass("lock");
  });
});

const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  depay: 400,
  reset: true,
});

sr.reveal(".home__subtitle", { origin: "top" })
sr.reveal(".home__title", { origin: "left" })
sr.reveal(".home__descr", { origin: "right" })
sr.reveal(".home__text", { origin: "top" })
sr.reveal(".home__button", { origin: "bottom" })
