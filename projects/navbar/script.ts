const nav: Element = document.querySelector(".nav")!;
const toggle: Element = nav.querySelector(".toggle")!;
toggle.addEventListener("click", () => {
     nav.classList.toggle("show_links");
})