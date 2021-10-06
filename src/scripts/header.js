const navButton = document.querySelector(".header__nav-icon");
const navMenu = document.querySelector(".header__nav-menu");
const dropDownButtons = document.querySelectorAll(".header__dropdown-button");

navButton.addEventListener("click", hideShow);

dropDownButtons.forEach(dropDownButton => dropDownButton.addEventListener("click", function dropDown() {
  dropDownButton.nextElementSibling.classList.toggle("is-clicked");
  dropDownButton.firstElementChild.classList.toggle("is-clicked");
  let dropDownButtonClicked = dropDownButton;
  dropDownButtons.forEach(dropDownButton => dropDownButton !== dropDownButtonClicked && ( dropDownButton.nextElementSibling.classList.remove("is-clicked"), dropDownButton.firstElementChild.classList.remove("is-clicked") ) )
}));

function hideShow() {
  navButton.classList.toggle("is-active");
  navMenu.classList.toggle("is-active");
}

const mql = window.matchMedia("(min-width: 768px)");

function screenTest(e) {
  if(e.matches && navMenu.classList.contains("is-active")) {
    navMenu.classList.remove("is-active");
    navButton.classList.remove("is-active");
  } 
}

mql.addEventListener("change", screenTest)