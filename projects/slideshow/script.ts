const usersData = [
  {
    img: "../assets/man1.jpg",
    name: "George Williams",
    occupation: "Graphics & UI/UX Designer",
    testimonial:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam molestias neque voluptate laudantium repellendus velit, minima harum mollitia sint veniam nam cupiditate tenetur qui, optio quae quam inventore, nulla beatae!",
  },
  {
    img: "../assets/man2.jpg",
    name: "Jerry Luis",
    occupation: "Cyber Security Engineer",
    testimonial:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam molestias neque voluptate laudantium repellendus velit, minima harum mollitia sint veniam nam cupiditate tenetur qui, optio quae quam inventore, nulla beatae!",
  },
  {
    img: "../assets/woman1.jpg",
    name: "Jordan Clay",
    occupation: "Software Developer",
    testimonial:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam molestias neque voluptate laudantium repellendus velit, minima harum mollitia sint veniam nam cupiditate tenetur qui, optio quae quam inventore, nulla beatae!",
  },
  {
    img: "../assets/man3.jpg",
    name: "David Beckham",
    occupation: "Data Analyst",
    testimonial:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam molestias neque voluptate laudantium repellendus velit, minima harum mollitia sint veniam nam cupiditate tenetur qui, optio quae quam inventore, nulla beatae!",
  },
  {
    img: "../assets/woman2.jpg",
    name: "Jane Love",
    occupation: "UI/UX Designer",
    testimonial:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam molestias neque voluptate laudantium repellendus velit, minima harum mollitia sint veniam nam cupiditate tenetur qui, optio quae quam inventore, nulla beatae!",
  },
];

const slideContainer: HTMLElement = document.querySelector(".slides_container")!;
let slideCounter = 0

const showSlides = () => {
  let html = `<div class="slides">
    <img src=${usersData[slideCounter].img} alt=${usersData[slideCounter].name} >
    <h2>${usersData[slideCounter].name}</h2>
    <h4>${usersData[slideCounter].occupation}</h4>
    <p>${usersData[slideCounter].testimonial}</p>
</div>`;
  slideContainer.innerHTML = html;
}

window.addEventListener("DOMContentLoaded",showSlides);



