$(document).ready(function () {
  // detectOS()
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
  const link = document.querySelector('.button__contact3')
  link.innerHTML = 'Download CV 😊'
  const platform = navigator.platform.toLowerCase(),
    iosPlatforms = ['iphone', 'ipad', 'ipod', 'ipod touch'];

  if (platform.includes('mac')) return link.setAttribute('href', "CV_Irzunov_Victor_17.02.2022.pages")
    ;
  if (iosPlatforms.includes(platform)) return console.log('iOS')
  if (platform.includes('win')) return link.setAttribute('href', "CV_Victor_Irzunov1.docx")
  // if (/android/.test(navigator.userAgent.toLowerCase())) return 'Android';
  // if (/linux/.test(platform)) return 'Linux';

  return 'unknown'
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

// function detectOS() {
//   const platform = navigator.platform.toLowerCase(),
//     iosPlatforms = ['iphone', 'ipad', 'ipod', 'ipod touch'];

//   if (platform.includes('mac')) return console.log('MacOS');
//   ;
//   if (iosPlatforms.includes(platform)) return console.log('iOS')
//   if (platform.includes('win')) return console.log('Windows')
//   // if (/android/.test(navigator.userAgent.toLowerCase())) return 'Android';
//   // if (/linux/.test(platform)) return 'Linux';

//   return 'unknown'
// }
