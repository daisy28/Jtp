const users = [
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
const userImg: Element = document.querySelector(".user_img")!;
const userName: Element = document.querySelector(".name")!;
const userOccupation: Element = document.querySelector(".occupation")!;
const userTestimony: Element = document.querySelector(".testimony")!;
const cardContainer: Element = document.querySelector(".container")!;
let cardCount = 0;

const uiDesign = (count: number) => {
     const index = users[count];
     userImg.setAttribute("src", `${index.img}`);
     userName.innerHTML = index.name;
     userOccupation.innerHTML = index.occupation;
     userTestimony.innerHTML = index.testimonial;
}

window.addEventListener("DOMContentLoaded", () => {
     uiDesign(cardCount);
});

const sliderBtns = document.querySelectorAll(".btn");

sliderBtns.forEach(buttons => {
     buttons.addEventListener("click", () => {
          if (buttons.classList.contains("next_btn")) {
               cardCount === users.length - 1 ? cardCount = 0 : cardCount++;
               uiDesign(cardCount);
          } else if (buttons.classList.contains("previous_btn")) {
               cardCount === 0 ?
                    cardCount = users.length - 1 : cardCount--;
               uiDesign(cardCount);
          } else {
               const randomIndex = Math.floor(Math.random() * users.length);
               uiDesign(randomIndex);
          }
     });
});
