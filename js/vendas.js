/********** ELEMENTOS DA PÁGINA **********/
preco = document.querySelector('#preço');
precoSlider = document.querySelector('#preço-slider');
carrosWrapper = document.querySelector('.vendas__wrapper');
btnPainel = document.querySelector('.filtros .btn');
painel = document.querySelector('.painel');
painelImg = document.querySelector('#carro-img');
painelNome = document.querySelector('#carro-nome');
painelPreco = document.querySelector('#carro-preco');
painelDesc = document.querySelector('#carro-desc');
painelDescLong = document.querySelector('#carro-descLong');
painelAno = document.querySelector('#carro-ano');
btnAdicionar = document.querySelector('.painel .btn');
painelList = document.querySelector('.painel__list');
btnDetalhes = document.querySelectorAll('.btnDetalhes');


/********** SLIDER-PREÇO **********/
// Colocar valor do slider no input number
attPreco = () => {
    console.log('ativado');
    preco.value = precoSlider.value;
}
// Colocar valor do input number no slider
attPrecoSlider = () => {
    precoSlider.value = preco.value;
}
// Evento de arrastar o slider
precoSlider.addEventListener('mousedown', () => {
    precoSlider.addEventListener('mousemove', attPreco);
});
precoSlider.addEventListener('mouseup', () => {
    precoSlider.removeEventListener('mousemove',attPreco )
});
// Evento de mudar o input number
preco.addEventListener('change', attPrecoSlider);


/********** CARREGAMENTO DA PÁGINA **********/
window.addEventListener('load', () => {
    // Criar o state.carros
    state.carros = new Carros;
    // Ler o storage e salvar em state.carros
    state.carros.readStorage();
    // Renderizar os carros e renderizar a lista
    state.carros.carros.forEach(car => {
        renderCarro(car);
        renderList(car);
    });
});


/********** PAINEL ***********/

// Renderizando o carro
renderCarro = car => {
    const markup = `
    <div class="vendas__box--single" id="${car.id}">
        <img src="images/${car.img[0]}">
        <h3>${car.nome}</h3>
        <p>${car.desc} - ${car.ano}</p>
        <div class="cega">
            <div class="btn">
                <a href="veiculo.html" class="btnDetalhes" carid="${car.id}">Mais detalhes</a>
            </div>
        </div>
    </div>
    `
    carrosWrapper.insertAdjacentHTML('beforeend', markup);
};
// Renderizando o nome na lista
renderList = car => {
    const markup = `
    <li>
        <i class="icon ion-md-close" delid="${car.id}"></i>
        <span>${car.nome}</span>
        <input type="checkbox" destaqueid="${car.id}"> 
    </li>
    `
    painelList.insertAdjacentHTML('beforeend', markup);
};
// Deletando o carro da UI
deleteCarroUI = id => {
    const carro = document.getElementById(id);
    carro.parentElement.removeChild(carro);
};
// Deletando o nome na lista
deleteList = el => {
    el.parentElement.removeChild(el);
};

// EVENTO PARA ABRIR O PAINEL
btnPainel.addEventListener('click', () => {
    painel.style.display = painel.style.display === 'flex' ? 'none' : 'flex';
});

// EVENTO PARA ADICIONAR UM CARRO
btnAdicionar.addEventListener('click', () => {
    // Declarando as variáveis do carro
    let nome, preco, desc, descLong, ano;
    let img = [];

    // Atribuindo os valores a partir dos inputs
    img = painelImg.value.split(',');
    nome = painelNome.value;
    preco = painelPreco.value;
    desc = painelDesc.value;
    descLong = painelDescLong.value;
    ano = painelAno.value

    // Criando novo carro no state.carros
    carro = state.carros.addCarro(img, nome, preco, desc, descLong, ano);

    // Renderizando o carro e o nome na lista
    renderCarro(carro);
    renderList(carro);

    // Resetando os inputs do painel
    painelImg.value = '';
    painelNome.value = '';
    painelPreco.value = '';
    painelDesc.value = '';
    painelDescLong.value = '';
});

// EVENTO PARA DELETAR UM CARRO OU SALVAR DESTAQUE
painelList.addEventListener('click', e => {
    let id;
    if (e.target.getAttribute('delid')) {
        id = e.target.getAttribute('delid');
        // Deletando o carro do state.carros
        state.carros.deleteCarro(id);
        // Deletando o carro da UI
        deleteCarroUI(id);
        // Deletando o nome na lista
        deleteList(e.target.parentElement);
    } else if (e.target.getAttribute('destaqueid')) {
        document.querySelectorAll('.painel__list > li > input').forEach(el => {
            id = el.getAttribute('destaqueid');
            let car = state.carros.carros.find(car => car.id === id);
            car.destaque = el.checked;
            state.carros.persistData();
        });
    };
});

// EVENTO DE MAIS DETALHES
carrosWrapper.addEventListener('click', e => {    
    // pegar o id do carro que clicou
    const id = e.target.getAttribute('carid');
    // tornar o active desse carro como true
    state.carros.carros.forEach(car => car.active = car.id === id ? true : false);
    state.carros.persistData();
});