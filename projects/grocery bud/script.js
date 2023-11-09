"use strict";
let groceryList = [];
const groceryDiv = document.querySelector(".grocery_div");
const inputAlert = document.querySelector(".alert");
const groceryForm = document.querySelector("#form");
const formInput = document.querySelector(".form_input");
const addBtn = document.querySelector(".add_btn");
const groceryContainer = document.querySelector(".grocery_list_container");
let editValue = false;
let idCount = 0;
;
groceryForm.addEventListener("submit", e => {
    e.preventDefault();
    addItem();
});
const addItem = () => {
    const value = formInput.value;
    const obj = { value, idCount };
    if (value && !editValue) {
        idCount++;
        groceryList.push(obj);
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
// console.log(groceryList)
// localStorage.clear()
let savedItems = JSON.parse(localStorage.getItem("items"));
savedItems ? groceryList = savedItems : "";
const showList = () => {
    let html = ``;
    groceryList.map(item => {
        // console.log(item)
        html += `
          <div class="grocery_list" id=${item.idCount}>
               <ul>
                    <li>${item.value}</li>
               </ul>
               <div class="grocery_btns">
                    <div class="edit btn">+</div>
                    <div class="delete btn">-</div>
               </div>
          </div>`;
    });
    groceryContainer.innerHTML = html;
    groceryDiv.querySelector(".clear_btn")?.classList.add("show_clear_btn");
};
if (groceryList.length > 0) {
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
groceryContainer.addEventListener("click", e => {
    e.stopImmediatePropagation();
    const item = e.target;
    const id = item.parentElement.parentElement.id;
    if (id && item.classList.contains("delete")) {
        let ret = groceryList.filter(item => {
            return `${item.idCount}` !== id;
        });
        groceryList = ret;
        savedItems = groceryList;
        localStorage.setItem("items", JSON.stringify(savedItems));
        showList();
        if (groceryList.length < 1 && savedItems.length < 1) {
            groceryDiv.querySelector(".clear_btn")?.classList.remove("show_clear_btn");
        }
    }
    else if (id && item.classList.contains("edit")) {
        console.log("edit");
    }
});
