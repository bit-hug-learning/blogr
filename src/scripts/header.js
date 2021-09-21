const navButton = document.querySelector(".header__nav-icon");
const navMenu = document.querySelector(".header__nav-menu");
const dropDownButtons = document.querySelectorAll(".header__dropdown-button");
const dropDownContents = document.querySelectorAll(".header__dropdown-content");
console.log(dropDownButtons)

navButton.addEventListener("click", hideShow);

dropDownButtons.forEach(dropDownButton => dropDownButton.addEventListener("click", function dropDown() {
  dropDownButton.nextElementSibling.classList.toggle("is-clicked");
  // console.log(dropDownButton.nextElementSibling)
}));

function hideShow() {
  navButton.classList.toggle("is-active");
  navMenu.classList.toggle("is-active");
}
