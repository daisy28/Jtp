"use strict";
const tabInfos = [
    {
        id: "0",
        img: "../assets/history.jpg",
        heading: "History",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempora laudantium velit quod amet voluptatibus corrupti, quaerat nisi labore laborum delectus eius mollitia, cumque, magni illum tenetur doloremque! Consequatur, ex!"
    },
    {
        id: "1",
        img: "../assets/images (1).jpeg",
        heading: "Vision",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempora laudantium velit quod amet voluptatibus corrupti, quaerat nisi labore laborum delectus eius mollitia, cumque, magni illum tenetur doloremque! Consequatur, ex!"
    },
    {
        id: "2",
        img: "../assets/images (12).jpeg",
        heading: "Goals",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempora laudantium velit quod amet voluptatibus corrupti, quaerat nisi labore laborum delectus eius mollitia, cumque, magni illum tenetur doloremque! Consequatur, ex!"
    },
];
;
const btnDiv = document.querySelector(".btn_div");
const tabImg = document.querySelector(".tab_img");
const tabInfo = document.querySelector(".info");
window.addEventListener("DOMContentLoaded", () => {
    tabInfos.map(tabBtn => {
        btnDiv.innerHTML += `<button class="tab_btn" id=${tabBtn.id}>${tabBtn.heading}</button>`;
    });
    const btns = btnDiv.querySelectorAll(".tab_btn");
    updateUI(tabInfos[0]);
    btns[0].style.background = `#aed1ec90`;
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabInfos.filter(info => {
                if (info.id === btn.id) {
                    updateUI(info);
                    btn.style.background = `#aed1ec90`;
                }
                else {
                    btn.style.background = `#6188a5b9`;
                }
            });
        });
    });
});
const updateUI = (item) => {
    tabImg.innerHTML = `<img src="${item.img}" alt=${item.heading} id=${item.id}>`;
    tabInfo.innerHTML = `<h3>${item.heading}</h3>
          <p>${item.description}</p>`;
};
