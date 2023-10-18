const navBar: HTMLElement = document.querySelector(".nav")!;
const menuToggle: HTMLElement = document.querySelector(".menu_toggle")!;
const menuLink: HTMLElement = document.querySelector(".menu_links")!;
const topBtn: HTMLElement = document.querySelector(".top_btn")!;
const date: HTMLElement = document.querySelector(".date")!;

date.innerHTML = `${new Date().getFullYear()}`;
menuToggle.addEventListener("click", () => {
     menuLink.classList.toggle("show_menu_links");
});

const links = menuLink.querySelectorAll("a");
links.forEach(link => {
     link.addEventListener("click", () => {
          menuLink.classList.remove("show_menu_links");
     });
});

const navHeight = navBar.getBoundingClientRect().height;
// console.log(navHeight)
window.addEventListener("scroll", () => {
console.log(navHeight)

     if (scrollY >= 300) {
          topBtn.classList.add("show_top_btn");
     } else {
          topBtn.classList.remove("show_top_btn");
     }

     if (scrollY > navHeight) {
          navBar.classList.add("fixed_nav");
     } else {
          navBar.classList.remove("fixed_nav");
     }

})
// console.log(navHeight)

