/********** ELEMENTOS DA PÁGINA **********/
preco = document.querySelector("#preço");
precoSlider = document.querySelector("#preço-slider");
carrosWrapper = document.querySelector(".vendas__wrapper");
btnDetalhes = document.querySelectorAll(".btnDetalhes");

/********** SLIDER-PREÇO **********/
// Colocar valor do slider no input number
attPreco = () => {
  preco.value = precoSlider.value;
};
// Colocar valor do input number no slider
attPrecoSlider = () => {
  precoSlider.value = preco.value;
};
// Evento de arrastar o slider
precoSlider.addEventListener("mousedown", () => {
  precoSlider.addEventListener("mousemove", attPreco);
});
precoSlider.addEventListener("mouseup", () => {
  precoSlider.removeEventListener("mousemove", attPreco);
});
// Evento de mudar o input number
preco.addEventListener("change", attPrecoSlider);
