menuBtn = document.querySelector('.icon');
menu = document.querySelector('.header__nav ul');

/********** MENU **********/
menuBtn.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    menuBtn.classList.toggle('ion-md-menu');
    menuBtn.classList.toggle('ion-md-close');
});

const state = {};

/********* CLASS CARROS **********/
class Carros {
    constructor () {
        this.carros = [];
    };
    // Salvar no storage
    persistData = () => {
        localStorage.setItem('carros', JSON.stringify(this.carros));
    };
    // Ler o storage
    readStorage() {
        const storage = JSON.parse(localStorage.getItem('carros'));
        if (storage) this.carros = storage;
    };
    // Adicionar um carro
    addCarro = (img, nome, preco, desc, descLong, ano, destaque=false, active=false) => {
        const carro = {
            id: Math.random().toString(36).substr(2, 9),
            img,
            nome,
            preco,
            desc,
            descLong,
            ano,
            destaque,
            active
        }
        this.carros.push(carro);
        this.persistData();
        return carro;
    };
    // Deletar um carro
    deleteCarro = (id) => {
        const index = this.carros.findIndex(car => car.id === id);
        this.carros.splice(index, 1);
        this.persistData();
    };
};