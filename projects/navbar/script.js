"use strict";
const nav = document.querySelector(".nav");
const toggle = nav.querySelector(".toggle");
toggle.addEventListener("click", () => {
    nav.classList.toggle("show_links");
});
