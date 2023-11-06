"use strict";
let groceryList = [];
const groceryDiv = document.querySelector(".grocery_div");
const inputAlert = document.querySelector(".alert");
const groceryForm = document.querySelector("#form");
const formInput = document.querySelector(".form_input");
const addBtn = document.querySelector(".submit_btn");
const groceryContainer = document.querySelector(".grocery_list_container");
let editValue = false;
const showList = () => {
    const listItem = JSON.parse(localStorage.getItem("item"));
    let html = ``;
    listItem.map(item => {
        html += `
          <div class="grocery_list">
               <ul>
                    <li>${item}</li>
               </ul>
               <div class="grocery_btns">
                    <div class="edit">+</div>
                    <div class="delete">-</div>
               </div>
          </div>`;
    });
    groceryContainer.innerHTML = html;
};
groceryForm.addEventListener("submit", e => {
    e.preventDefault();
    const value = formInput.value;
    if (value && !editValue) {
        groceryList.push(value);
        localStorage.setItem("item", JSON.stringify(groceryList));
        showList();
        alertMessage("item added successfully!", "alert_success");
        groceryDiv.querySelector(".clear_btn")?.classList.add("show_clear_btn");
    }
    else if (value && editValue) {
        formInput.focus();
        addBtn.textContent = `edit`;
    }
    else {
        alertMessage("add an item!", "alert_error");
    }
    formInput.value = ``;
});
const clearBtn = groceryDiv.querySelector(".clear_btn");
clearBtn?.addEventListener("click", () => {
    localStorage.clear();
    console.log("cleared");
});
const alertMessage = (text, status) => {
    inputAlert.innerHTML = `${text}`;
    inputAlert.classList.add(status);
    setTimeout(() => {
        inputAlert.innerHTML = ``;
        inputAlert.classList.remove(status);
    }, 1000);
};
// showList()
// if (groceryList) {
//      showList();
// };
