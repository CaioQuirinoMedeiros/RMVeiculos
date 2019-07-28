menuBtn = document.querySelector(".icon");
menu = document.querySelector(".header__nav ul");
boxes = document.querySelectorAll(".servicos__box");
depWrapper = document.querySelector(".depoimentos__wrapper");
depButtons = document.querySelectorAll(".depoimentos__btns--btn");

/***** MENU *****/
menuBtn.addEventListener("click", () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  menuBtn.classList.toggle("ion-md-menu");
  menuBtn.classList.toggle("ion-md-close");
});

/***** AUTHORS *****/
let servBox = 0;
let timer;

nextservBox = () => {
  servBox = servBox === 2 ? 0 : ++servBox;
  selectservBox();
};

selectservBox = () => {
  boxes.forEach(box => {
    box.classList.remove("active");
    if (box.id === `serv-${servBox}`) box.classList.add("active");
  });
  timer = setTimeout(nextservBox, 5000);
};

boxes.forEach(box => {
  box.addEventListener("mouseenter", () => {
    servBox = parseInt(box.id.substr(-1));
    clearTimeout(timer);
    selectservBox();
  });
});

selectservBox();

changeDepoiment = pos => {
  depWrapper.style.left = `-${pos}00%`;
};

depoimentButton = e => {
  depButtons.forEach(depButton => {
    depButton.classList.remove("btn-active");
  });
  const activeButton = e.target;
  activeButton.classList.add("btn-active");
  const pos = activeButton.id.slice(-1);
  changeDepoiment(pos);
};

depButtons.forEach(depButton => {
  depButton.addEventListener("click", depoimentButton);
});
