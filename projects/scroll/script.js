"use strict";
const menuToggle = document.querySelector(".menu_toggle");
const menuLink = document.querySelector(".menu_links");
const date = document.querySelector(".date");
date.innerHTML = `${new Date().getFullYear()}`;
menuToggle.addEventListener("click", () => {
    menuLink.classList.toggle("show_menu_links");
});
