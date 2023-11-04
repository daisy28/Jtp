const navBar: HTMLElement = document.querySelector(".nav")!;
const menuToggle: HTMLElement = document.querySelector(".menu_toggle")!;
const menuLink: HTMLElement = document.querySelector(".menu_links")!;
const topBtn: HTMLElement = document.querySelector(".top_btn")!;
const scrollLinks: NodeListOf<Element> = document.querySelectorAll(".scroll_link")!;
const date: HTMLElement = document.querySelector(".date")!;
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
  } else {
    topBtn.classList.remove("show_top_btn");
  }

  if (scrollY > 50) {
    navBar.classList.add("fixed_nav");
  } else {
    navBar.classList.remove("fixed_nav");
  }
});

scrollLinks.forEach((links) => {
  links.addEventListener("click", (e) => {
    e.preventDefault();
    const id = (e.currentTarget as HTMLElement)!.getAttribute("href")!.slice(1);
    const element: HTMLElement = document.getElementById(id)!;
    const fixedNav = navBar.classList.contains("fixed_nav");
    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position -= navHeight + 64;
    }
    if (navHeight > 99) {
      position += menuLinkHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
