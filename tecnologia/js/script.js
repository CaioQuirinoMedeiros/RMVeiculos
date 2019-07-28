header = document.querySelector('.header');
nav = document.querySelector('.header__nav')
btnMenu = document.querySelector('.icon');
menu = document.querySelector('.nav__menu-resp ul');
icon = document.querySelector('.icon');
botões = document.querySelector('.placeholder__botões');
botão = document.querySelectorAll('.placeholder__botões li');
wrapper = document.querySelector('.wrapper');
botõesAut = document.querySelector('.authors__botões');
botãoAut = document.querySelectorAll('.authors__botões li');
boxAut = document.querySelectorAll('.box-2__slide');


/***** MENU *****/
btnMenu.addEventListener('click', () => {
    display = menu.style.display;
    if (display === 'none' ) {
        menu.style.display = 'block';
        icon.classList.remove('ion-md-menu');
        icon.classList.add('ion-md-close');
    } else {
        menu.style.display = 'none';
        icon.classList.remove('ion-md-close');
        icon.classList.add('ion-md-menu');
    }
});

window.addEventListener('scroll', () => {
    const pos = header.getBoundingClientRect().bottom;
    if (pos < 50) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

/***** AUTHORS *****/
let slideAut = 0;
let timerAut;

nextSlideAut = () => {
    slideAut = slideAut === 2 ? 0 : ++slideAut;
    console.log('indo para o slide: '+slideAut);
    selectSlideAut();
    selectActiveAut();
}

selectSlideAut = () => {
    console.log('slide atual: '+slideAut);
    boxAut.forEach(box => {
        box.classList.remove('slide-active');
        setTimeout(() =>{
            if (box.id === `author-${slideAut}`) box.classList.add('slide-active');
        }, 500);
    })
    timerAut= setTimeout(nextSlideAut, 5000);
};

selectActiveAut = () => {
    botãoAut.forEach(btn => {
        btn.classList.remove('botão-active');
        setTimeout(() => {
            if (parseInt(btn.id)/10 === slideAut) btn.classList.add('botão-active');
        }, 500); 
    });
};

botõesAut.addEventListener('click', e => {
    if (e.target.id) {
        slideAut = parseInt(e.target.id)/10
        clearTimeout(timerAut);
        selectSlideAut();
        selectActiveAut();
    }
});

selectSlideAut()

/***** PLACEHOLDER *****/
let slide = 0;
let timer;

nextSlide = () => {
    slide = slide === 3 ? 0 : ++slide;
    selectSlide();
    selectActive();
}

selectSlide = () => {
    wrapper.style.left = `-${slide}00%`;
    timer = setTimeout(nextSlide, 3000);
};

selectActive = () => {
    botão.forEach(btn => {
        btn.classList.remove('botão-active');
        if (parseInt(btn.id) === slide) btn.classList.add('botão-active');
    });
};

botões.addEventListener('click', e => {
    if (e.target.id) {
        slide = parseInt(e.target.id)
        clearTimeout(timer);
        selectSlide();
        selectActive();
    }
});

selectSlide();
