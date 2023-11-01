const tabInfos = [
  {
    id: "0",
    img: "../assets/history.jpg",
    heading: "History",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempora laudantium velit quod amet voluptatibus corrupti, quaerat nisi labore laborum delectus eius mollitia, cumque, magni illum tenetur doloremque! Consequatur, ex!",
  },
  {
    id: "1",
    img: "../assets/images (1).jpeg",
    heading: "Vision",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempora laudantium velit quod amet voluptatibus corrupti, quaerat nisi labore laborum delectus eius mollitia, cumque, magni illum tenetur doloremque! Consequatur, ex!",
  },
  {
    id: "2",
    img: "../assets/images (12).jpeg",
    heading: "Goals",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempora laudantium velit quod amet voluptatibus corrupti, quaerat nisi labore laborum delectus eius mollitia, cumque, magni illum tenetur doloremque! Consequatur, ex!",
  },
];

interface tab {
  id: string;
  img: string;
  heading: string;
  description: string;
}

const btnDiv: HTMLElement = document.querySelector(".btn_div")!;
const tabImg: HTMLElement = document.querySelector(".tab_img")!;
const tabInfo: HTMLElement = document.querySelector(".info")!;

window.addEventListener("DOMContentLoaded", () => {
  tabInfos.map((tabBtn) => {
    btnDiv.innerHTML += `<button class="tab_btn" id=${tabBtn.id}>${tabBtn.heading}</button>`;
  });
  const btns = btnDiv.querySelectorAll(".tab_btn");
  updateUI(tabInfos[0]);
  btns[0].classList.add("active_btn");
  btns.forEach((btn) => {
    let infoId = ``;
    btn.addEventListener("click", () => {
      tabInfos.filter((info) => {
        if (info.id === btn.id) {
          updateUI(info);
          infoId = info.id;
        }
      });
      if (btn.id.includes(infoId) && !btn.classList.contains("active_btn")) {
        console.log("yes");
        btn.classList.add("active_btn");
      } else {
        btn.classList.remove("active_btn");
      }
    });
  });
});

const updateUI = (item: tab) => {
  tabImg.innerHTML = `<img src="${item.img}" alt=${item.heading} id=${item.id}>`;
  tabInfo.innerHTML = `<h3>${item.heading}</h3>
          <p>${item.description}</p>`;
};
