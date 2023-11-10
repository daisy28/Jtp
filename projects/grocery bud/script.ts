let groceryList: List[] = [];
const groceryDiv: HTMLElement = document.querySelector(".grocery_div")!;
const inputAlert: HTMLElement = document.querySelector(".alert")!;
const groceryForm: HTMLElement = document.querySelector("#form")!;
const formInput: HTMLInputElement = document.querySelector(".form_input")!;
const addBtn: HTMLInputElement = document.querySelector(".add_btn")!;
const groceryContainer: HTMLInputElement = document.querySelector(".grocery_list_container")!;
let editValue = false;
let idCount = 0;
let itemId = "";
interface List {
     value: string,
     idCount: number
};

const addItem = (e) => {
     e.preventDefault();
     const value = formInput.value;
     const listObj = { value, idCount };
     if (value && !editValue) {
          idCount++;
          groceryList.push(listObj);
          localStorage.setItem("items", JSON.stringify(groceryList));
          showList();
          alertMessage(`${value} added!`, "alert_success");
     } else if (value && editValue) {
          const children = Array.from(e.target.parentElement.querySelector(".grocery_list_container").children);
          const editedItem = children.filter(item => {
               if (item.id === itemId) {
                    return item;
               }
          });
          editedItem.map(item => {
               item.querySelector("ul").innerHTML = `<li>${value} </li>`;
               addBtn.textContent = `add`;
               editValue = false;
          });
     } else {
          alertMessage("add an item!", "alert_error");
     }
     formInput.value = ``;
}

groceryForm.addEventListener("submit", addItem);


let savedItems: List[] = JSON.parse(localStorage.getItem("items")!);
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
               <div class="grocery_btns" id=${item.idCount}>
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

const alertMessage = (text: string, status: string) => {
     inputAlert.innerHTML = `${text}`;
     inputAlert.classList.add(status);

     setTimeout(() => {
          inputAlert.innerHTML = ``;
          inputAlert.classList.remove(status);
     }, 1000);
}

groceryContainer.addEventListener("click", e => {
     e.stopImmediatePropagation();
     const item = e.target;
     const id = item.parentElement.parentElement.id;
     if (id && item.classList.contains("delete")) {
          let ret = groceryList.filter(item => {
               return `${item.idCount}` !== id
          });
          groceryList = ret;
          savedItems = groceryList;
          localStorage.setItem("items", JSON.stringify(savedItems));
          showList()
          if (groceryList.length < 1 && savedItems.length < 1) {
               groceryDiv.querySelector(".clear_btn")?.classList.remove("show_clear_btn");
          }
     } else if (id && item.classList.contains("edit")) {
          editValue = true;
          addBtn.innerHTML = "edit";
          formInput.focus();
          itemId = item.parentElement.parentElement.id;
     }
});
