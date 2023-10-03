"use strict";
const counterBtn = document.querySelectorAll(".btn");
const counter = document.querySelector("#number");
const saveCount = document.querySelector("#save_count");
const totalCount = document.querySelector("#total_count");
let count = 0;
let total = 0;
counterBtn.forEach((btns) => {
    btns.addEventListener("click", () => {
        if (btns.id.includes("btn_increment")) {
            count++;
            counter.style.color = "green";
            counter.innerHTML = `${count}`;
        }
        else if (btns.id.includes("btn_decrement")) {
            count--;
            counter.style.color = "crimson";
            counter.innerHTML = `${count}`;
        }
        else if (btns.id.includes("btn_reset")) {
            count = 0;
            total = count;
            counter.style.color = "black";
            totalCount.style.color = `black`;
            saveCount.style.color = `black`;
            counter.innerHTML = `${count}`;
            totalCount.innerHTML = `Total: ${total}`;
            saveCount.textContent = `Save: `;
        }
        else {
            total += count;
            saveCount.style.color = `goldenrod`;
            count < 0
                ? (saveCount.textContent += `(${count}) - `)
                : (saveCount.textContent += `${count} - `);
            total < 0
                ? (totalCount.style.color = `red`)
                : (totalCount.style.color = `blue`);
            totalCount.textContent = `Total: ${total}`;
            count = 0;
            counter.innerHTML = `${count}`;
            counter.style.color = `black`;
        }
    });
});
