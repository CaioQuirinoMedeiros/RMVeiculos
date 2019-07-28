menuBtn = document.querySelector(".icon");
menu = document.querySelector(".header__nav ul");

/********** MENU **********/
menuBtn.addEventListener("click", () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  menuBtn.classList.toggle("ion-md-menu");
  menuBtn.classList.toggle("ion-md-close");
});

const state = {};
