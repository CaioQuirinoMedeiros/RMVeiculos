menuBtn = document.querySelector('.icon');
menu = document.querySelector('.header__nav ul');
boxes = document.querySelectorAll('.servicos__box');

/***** MENU *****/
menuBtn.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    menuBtn.classList.toggle('ion-md-menu');
    menuBtn.classList.toggle('ion-md-close');
});

/***** AUTHORS *****/
let servBox = 0;
let timer;

nextservBox = () => {
    servBox = servBox === 2 ? 0 : ++servBox;
    console.log('indo para o slide: '+servBox);
    selectservBox();
}

selectservBox = () => {
    console.log('slide atual: '+servBox);
    boxes.forEach(box => {
        box.classList.remove('active');
        if (box.id === `serv-${servBox}`) box.classList.add('active');
    })
    timer = setTimeout(nextservBox, 5000);
};

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        servBox = parseInt(box.id.substr(-1));
        clearTimeout(timer);
        selectservBox();
    })
});

selectservBox()
