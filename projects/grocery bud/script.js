"use strict";
let groceryList = [];
const groceryDiv = document.querySelector(".grocery_div");
const inputAlert = document.querySelector(".alert");
const groceryForm = document.querySelector("#form");
const formInput = document.querySelector(".form_input");
const addBtn = document.querySelector(".add_btn");
const groceryContainer = document.querySelector(".grocery_list_container");
let editValue = false;
// let clearItems = false;
groceryForm.addEventListener("submit", e => {
    e.preventDefault();
    addItem();
});
const addItem = () => {
    const value = formInput.value;
    if (value && !editValue) {
        groceryList.push(value);
        localStorage.setItem("items", JSON.stringify(groceryList));
        showList();
        alertMessage("item added successfully!", "alert_success");
    }
    else if (value && editValue) {
        formInput.focus();
        addBtn.textContent = `edit`;
    }
    else {
        alertMessage("add an item!", "alert_error");
    }
    formInput.value = ``;
};
const savedItems = JSON.parse(localStorage.getItem("items"));
savedItems ? groceryList = savedItems : "";
const showList = () => {
    let html = ``;
    groceryList.map(item => {
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
    groceryDiv.querySelector(".clear_btn")?.classList.add("show_clear_btn");
};
if (groceryList) {
    showList();
}
const clearBtn = groceryDiv.querySelector(".clear_btn");
clearBtn?.addEventListener("click", () => {
    localStorage.clear();
    groceryList = [];
    showList();
    groceryDiv.querySelector(".clear_btn")?.classList.remove("show_clear_btn");
});
const alertMessage = (text, status) => {
    inputAlert.innerHTML = `${text}`;
    inputAlert.classList.add(status);
    setTimeout(() => {
        inputAlert.innerHTML = ``;
        inputAlert.classList.remove(status);
    }, 1000);
};
