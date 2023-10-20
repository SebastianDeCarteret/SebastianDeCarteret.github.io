let headerName = document.querySelector("header > h1");

let headerButtons = document.querySelectorAll("header > naviagtion, button");
let [homeButton, bioButton, experienceButton, portfolioButton] = headerButtons;

let contentTag = document.querySelector("content");
let bioTag = document.querySelector("bio");
let experienceTag = document.querySelector("experience");
let portfolioTag = document.querySelector("portfolio");

let isAllowedToToggle = true;

headerName.addEventListener("click", () => {
  location.replace("index.html");
});

homeButton.addEventListener("click", () => {
  location.replace("index.html");
});

bioButton.addEventListener("click", () => {
  showBioHideOthers();
});

experienceButton.addEventListener("click", () => {
  showExperienceHideOthers();
});

portfolioButton.addEventListener("click", () => {
  showPortfolioHideOthers();
});

function showBioHideOthers() {
  resetHidden();
  isAllowedToToggle = true;
  if (isAllowedToToggle) {
    isAllowedToToggle = false;
    bioTag.classList.remove("hide-bio");
  }
}

function showExperienceHideOthers() {
  resetHidden();
  isAllowedToToggle = true;
  if (isAllowedToToggle) {
    isAllowedToToggle = false;
    experienceTag.classList.remove("hide-experience");
  }
}

function showPortfolioHideOthers() {
  resetHidden();
  isAllowedToToggle = true;
  if (isAllowedToToggle) {
    isAllowedToToggle = false;
    portfolioTag.classList.remove("hide-portfolio");
  }
}

function resetHidden() {
  contentTag.classList.add("hide-content");
  experienceTag.classList.add("hide-experience");
  bioTag.classList.add("hide-bio");
  portfolioTag.classList.add("hide-portfolio");
}
