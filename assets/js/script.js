'use strict';

const themeToggleBtn = document.querySelector("[data-theme-toggle]");
const savedTheme = localStorage.getItem("theme");
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

const setTheme = function (theme) {
  const darkModeEnabled = theme === "dark";

  document.documentElement.dataset.theme = theme;
  themeToggleBtn.setAttribute("aria-pressed", darkModeEnabled);
  themeToggleBtn.setAttribute(
    "aria-label",
    darkModeEnabled ? "Switch to light mode" : "Switch to dark mode"
  );
}

setTheme(savedTheme || (prefersDarkMode ? "dark" : "light"));

themeToggleBtn.addEventListener("click", function () {
  const newTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";

  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});


const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});
