veiculo = document.querySelector('.veiculo');
galeriaWrapper = document.querySelector('.galeria__wrapper');
carNome = document.querySelector('.veiculo-active > .title > h2');
carPreco = document.querySelector('.veiculo__descricao > h2');
carAno = document.querySelector('.veiculo__descricao > h3');
carDescLong = document.querySelector('.veiculo__descricao > p');
veiculoFoto = document.querySelector('.veiculo__foto');

/********** CARREGAMENTO DA PÁGINA **********/
window.addEventListener('load', () => {
    // Criar o state.carros
    state.carros = new Carros;
    // Ler o storage e salvar em state.carros
    state.carros.readStorage();
    // Renderizar os carros e renderizar a lista
    carro = state.carros.carros.find(car => car.active)
    renderVeiculo(carro);
    // Renderizar a foto principal
    attFoto(galeriaWrapper.firstChild.style.backgroundImage);
    activeFoto(galeriaWrapper.firstChild);
});

// Renderizar veiculo
renderVeiculo = car => {
    let images = '';
    car.img.forEach(img => {
        let url = `images/${img}`
        images +=`<div class="galeria--single" style="background-image:url(${url})"></div>`
    })
    while (galeriaWrapper.firstChild) galeriaWrapper.removeChild(galeriaWrapper.firstChild);
    galeriaWrapper.insertAdjacentHTML('afterbegin', images);
    carNome.textContent = car.nome;
    carPreco.textContent = `R$ ${car.preco}`;
    carAno.textContent = `Ano ${car.ano}`;
    carDescLong.textContent = car.descLong;    
}

/********** FOTOS **********/
// Atualizando foto do veiculo
attFoto = img => {
    veiculoFoto.style.backgroundImage = img;
}

activeFoto = el => {
    document.querySelectorAll('.galeria--single').forEach(e => e.classList.remove('foto-active'));
    el.classList.add('foto-active');
}

// EVENTO DE SELECIONAR A FOTO DO VEICULO
galeriaWrapper.addEventListener('click', e => {
    if (e.target.classList.contains('galeria--single')) {
        activeFoto(e.target);
        attFoto(e.target.style.backgroundImage);
    }
});





