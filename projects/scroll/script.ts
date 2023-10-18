const menuToggle: HTMLElement = document.querySelector(".menu_toggle")!;
const menuLink: HTMLElement = document.querySelector(".menu_links")!;
const date: HTMLElement = document.querySelector(".date")!;

date.innerHTML = `${new Date().getFullYear()}`;

menuToggle.addEventListener("click", () => {
     menuLink.classList.toggle("show_menu_links");
});



