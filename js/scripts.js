$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
      $(".go__top").fadeIn();
    }
    else {
      $(".navbar").removeClass("sticky");
      $(".go__top").fadeOut();
    }
  });

  $(".go__top").click(function () { scroll(0, 0) });

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

function toggleOpen(i) {

  if (i === 1) document.querySelector('.i1').classList.toggle('open')
  if (i === 2) document.querySelector('.i2').classList.toggle('open')
  if (i === 3) document.querySelector('.i3').classList.toggle('open')
  if (i === 4) document.querySelector('.i4').classList.toggle('open')
  if (i === 5) document.querySelector('.i5').classList.toggle('open')
  if (i === 6) document.querySelector('.i6').classList.toggle('open')
  if (i !== 1) document.querySelector('.i1').classList.remove('open')
  if (i !== 2) document.querySelector('.i2').classList.remove('open')
  if (i !== 3) document.querySelector('.i3').classList.remove('open')
  if (i !== 4) document.querySelector('.i4').classList.remove('open')
  if (i !== 5) document.querySelector('.i5').classList.remove('open')
  if (i !== 6) document.querySelector('.i6').classList.remove('open')
}



// password smtp: 2C6415DA197451850E2CF105647497D5EB6B