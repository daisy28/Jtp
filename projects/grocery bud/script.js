"use strict";
let groceryList = [];
const groceryDiv = document.querySelector(".grocery_div");
const inputAlert = document.querySelector(".alert");
const groceryForm = document.querySelector("#form");
const formInput = document.querySelector(".form_input");
const addBtn = document.querySelector(".add_btn");
const groceryContainer = document.querySelector(".grocery_list_container");
const dialog = document.querySelector(".dialog_wrapper");
let editValue = false;
let itemId = "";
let oldItem = "";
;
const addItem = (e) => {
    e.preventDefault();
    const value = formInput.value.trim();
    let idCount = new Date().getTime();
    if (value && !editValue) {
        const listObj = { value, idCount };
        groceryList.push(listObj);
        localStorage.setItem("items", JSON.stringify(groceryList));
        showList();
        alertMessage(`${value} added to the list!`, "alert_success");
        setToDefault();
    }
    else if (value && editValue) {
        let listIndex = 0;
        const children = Array.from(e.target.parentElement.querySelector(".grocery_list_container").children);
        console.log(children);
        const editedItem = children.filter((item, index) => {
            if (item.id === itemId) {
                listIndex = index;
                return groceryList[listIndex];
            }
            return;
        });
        editedItem.map(item => {
            item.querySelector("ul").innerHTML = `<li>${value}</li>`;
            groceryList[listIndex].value = value;
            savedItems = groceryList;
            localStorage.setItem("items", JSON.stringify(savedItems));
            addBtn.textContent = `add`;
            editValue = false;
        });
        alertMessage(`${oldItem} edited!`, "alert_success");
        setToDefault();
    }
    else {
        alertMessage("add an item!", "alert_error");
    }
};
groceryForm.addEventListener("submit", addItem);
let savedItems = JSON.parse(localStorage.getItem("items"));
savedItems ? groceryList = savedItems : "";
const showList = () => {
    let html = ``;
    groceryList.map(item => {
        html += `
          <div class="grocery_list" id=${item.idCount}>
               <ul>
                    <li>${item.value}</li>
               </ul>
               <div class="grocery_btns" id=${item.idCount}>
                    <button class="edit"><img src="../assets/fountain-pen-icon-png.png" alt="edit button" class="edit_btn"></button>
          
                    <button class="delete"><img src="../assets/images__1_-removebg-preview.png" alt="delete button" class="delete_btn"></button>
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
    dialog.classList.add("show_dialog");
    const confirmBtn = dialog.querySelectorAll("button");
    confirmBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            if (btn.classList.contains("back_btn")) {
                dialog.classList.remove("show_dialog");
            }
            else {
                localStorage.clear();
                groceryList = [];
                showList();
                groceryDiv.querySelector(".clear_btn")?.classList.remove("show_clear_btn");
                dialog.classList.remove("show_dialog");
                alertMessage(`list cleared!`, "alert_error");
                setToDefault();
            }
        });
    });
});
const setToDefault = () => {
    formInput.value = ``;
    addBtn.innerHTML = "add";
    editValue = false;
};
const alertMessage = (text, status) => {
    inputAlert.innerHTML = `${text}`;
    inputAlert.classList.add(status);
    setTimeout(() => {
        inputAlert.innerHTML = ``;
        inputAlert.classList.remove(status);
    }, 1000);
};
console.log(groceryContainer);
groceryContainer.addEventListener("click", e => {
    e.stopImmediatePropagation();
    const item = e.target;
    const id = item.parentElement?.parentElement;
    if (id && item.classList.contains("delete_btn")) {
        let ret = groceryList.filter(item => {
            return `${item.idCount}` !== id.id;
        });
        groceryList.filter(item => {
            `${item.idCount}` === id.id ? alertMessage(`${item.value} deleted!`, `alert_error`) : ``;
        });
        groceryList = ret;
        savedItems = groceryList;
        localStorage.setItem("items", JSON.stringify(savedItems));
        showList();
        if (groceryList.length < 1 && savedItems.length < 1) {
            groceryDiv.querySelector(".clear_btn")?.classList.remove("show_clear_btn");
        }
        setToDefault();
    }
    else if (id && item.classList.contains("edit_btn")) {
        editValue = true;
        addBtn.innerHTML = "edit";
        oldItem = item.parentElement?.parentElement?.parentElement?.querySelector("li").textContent;
        formInput.value = oldItem;
        formInput.focus();
        itemId = item.parentElement?.parentElement?.id;
    }
});
