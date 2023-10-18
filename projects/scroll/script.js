"use strict";
const navBar = document.querySelector(".nav");
const menuToggle = document.querySelector(".menu_toggle");
const menuLink = document.querySelector(".menu_links");
const topBtn = document.querySelector(".top_btn");
const scrollLinks = document.querySelectorAll(".scroll_link");
const date = document.querySelector(".date");
const navHeight = navBar.getBoundingClientRect().height;
const menuLinkHeight = menuLink.getBoundingClientRect().height;
date.innerHTML = `${new Date().getFullYear()}`;
menuToggle.addEventListener("click", () => {
    menuLink.classList.toggle("show_menu_links");
});
const links = menuLink.querySelectorAll("a");
links.forEach((link) => {
    link.addEventListener("click", () => {
        menuLink.classList.remove("show_menu_links");
    });
});
window.addEventListener("scroll", () => {
    if (scrollY >= 300) {
        topBtn.classList.add("show_top_btn");
    }
    else {
        topBtn.classList.remove("show_top_btn");
    }
    if (scrollY > navHeight) {
        navBar.classList.add("fixed_nav");
    }
    else {
        navBar.classList.remove("fixed_nav");
    }
});
scrollLinks.forEach((links) => {
    links.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const fixedNav = navBar.classList.contains("fixed_nav");
        let position = element.offsetTop - navHeight;
        if (!fixedNav) {
            position -= navHeight + 68;
        }
        if (navHeight > 99) {
            position = position + menuLinkHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
    });
});
