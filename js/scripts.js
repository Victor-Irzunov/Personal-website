$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    }
    else {
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function () { scroll(0, 0) });

  $('.menu-toggler').click(function () {
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  $(".works").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: { enabled: true }
  });
});

function toglleBtn() {
  document.querySelector('.button__contact').classList.toggle('active')
  document.querySelector('.button__contact2').classList.toggle('active')
}
function load() {
  document.querySelector('.button__contact3').innerHTML = 'Download CV 😀'
}

