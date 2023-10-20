let headerName = document.querySelector("header > h1");

let headerButtons = document.querySelectorAll("header > naviagtion, button");
let [homeButton, bioButton, experienceButton, portfolioButton] = headerButtons;

headerName.addEventListener("click", () => {
  location.replace("index.html");
});

homeButton.addEventListener("click", () => {
  location.replace("index.html");
});
