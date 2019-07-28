

/* ----- STICKY NAV ----- */
let navbar = document.querySelector('.navigation');
let botaoTopo = document.querySelector('.to-top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset >= 568) {
        navbar.classList.add('sticky');
        botaoTopo.style.display = 'block';
    } else {
        navbar.classList.remove('sticky');
        botaoTopo.style.display = 'none';
    }
});

/* ----- SCROLL TO ----- */
elementos = document.querySelectorAll('.botoes');

for (let i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener('click', function() { 
    let startingY = window.pageYOffset;
    let elementY = document.querySelector(this.getAttribute('href')).offsetTop;
    let diff = elementY - startingY;
    let duration = 700;
    let start;
  
    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      let time = timestamp - start;
      let percent = Math.min(time / duration, 1);
  
      window.scrollTo(0, startingY + diff * percent);
  
      if (time < duration) {
        window.requestAnimationFrame(step);
      }
    })
  });
}

/* ----- ANIMATIONS ----- */

document.querySelector('#features-row-2').addEventListener('mouseenter', function() {
    this.classList.add('animated', 'fadeIn');
});

document.querySelector('#cities-row-2').addEventListener('mouseenter', function() {
    this.classList.add('animated', 'fadeIn');
});

document.querySelector('#steps-row-2').addEventListener('mouseenter', function() {
    document.querySelector('.app-screen').classList.add('animated', 'fadeInUp');
});

document.querySelector('#plans-row-2').addEventListener('mouseenter', function() {
    document.querySelector('.plan-box:first-child').classList.add('animated', 'pulse');
});

document.querySelector('.mobile-nav-icon').addEventListener('click', function() {
    let navDisplay = document.querySelector('.main-nav').style.display;
    let iconMenu = document.querySelector('#icon-menu')
    if (navDisplay === 'none') {
        navDisplay = 'inline-block';
        iconMenu.classList.remove('ion-ios-menu');
        iconMenu.classList.add('ion-ios-close');
    } else {
        navDisplay = 'none';
        iconMenu.classList.add('ion-ios-menu');
        iconMenu.classList.remove('ion-ios-close');
    }
    document.querySelector('.main-nav').style.display = navDisplay;
});

