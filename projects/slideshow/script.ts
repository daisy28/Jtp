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
  {
    img: "../assets/woman1.jpg",
    name: "Jordan Clay",
    occupation: "Software Developer",
    testimonial:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam molestias neque voluptate laudantium repellendus velit, minima harum mollitia sint veniam nam cupiditate tenetur qui, optio quae quam inventore, nulla beatae!",
  },
  {
    img: "../assets/man3.jpg",
    name: "John Doe",
    occupation: "Data Engineer",
    testimonial:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam molestias neque voluptate laudantium repellendus velit, minima harum mollitia sint veniam nam cupiditate tenetur qui, optio quae quam inventore, nulla beatae!",
  },
];

const slideContainer: HTMLElement = document.querySelector(".slides_container")!;
const slideNumber: HTMLElement = document.querySelector(".slide_number")!;
const slideShowButtons: NodeListOf<Element> = document.querySelectorAll(".btn_div button")!;
let slideCounter = 0;

const showSlides = () => {
  const data = usersData[slideCounter];
  let html = `<div class="slides">
    <img src=${data.img} alt=${data.name} >
    <h2>${data.name}</h2>
    <h4>${data.occupation}</h4>
    <p>${data.testimonial}</p>
</div>`;
  slideContainer.innerHTML = html;
}

usersData.map((data, index) => {
  slideNumber.innerHTML += `<div class="number">${index + 1}</div>`;
  console.log(data);
});

const numberList = slideNumber.querySelectorAll(".number");
numberList[slideCounter].classList.add("active_number");

window.addEventListener("DOMContentLoaded", showSlides);

slideShowButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("next_btn")) {
      slideCounter === usersData.length - 1 ? slideCounter = 0 : slideCounter++;
      numberList.forEach(num => {
        num.classList.remove("active_number");
      });
      numberList[slideCounter].classList.add("active_number");
      showSlides();
    } else {
      slideCounter === 0 ? slideCounter = usersData.length - 1 : slideCounter--;
      numberList.forEach(num => {
        num.classList.remove("active_number");
      });
      numberList[slideCounter].classList.add("active_number");
      showSlides();
    }

    if (slideCounter > 0) {
  slideShowButtons[0].classList.add("show_prev_btn");
    } else {
      slideShowButtons[0].classList.remove("show_prev_btn");
    }
    
    if (slideCounter === usersData.length - 1) {
      slideShowButtons[1].classList.add("hide_next_btn");
    } else {
      slideShowButtons[1].classList.remove("hide_next_btn");
   }
  });
});








