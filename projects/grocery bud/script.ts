let groceryList: List[] = [];
const groceryDiv: HTMLElement = document.querySelector(".grocery_div")!;
const inputAlert: HTMLElement = document.querySelector(".alert")!;
const groceryForm: HTMLElement = document.querySelector("#form")!;
const formInput: HTMLInputElement = document.querySelector(".form_input")!;
const addBtn: HTMLInputElement = document.querySelector(".add_btn")!;
const groceryContainer: HTMLInputElement = document.querySelector(".grocery_list_container")!;
let editValue = false;
let idCount = 0;
interface List {
     value: string,
     idCount: number
};

groceryForm.addEventListener("submit", e => {
     e.preventDefault();
     addItem();
});

const addItem = () => {
     const value = formInput.value;
     const obj = {value, idCount}
     if (value && !editValue) {
          idCount++
          groceryList.push(obj);
          localStorage.setItem("items", JSON.stringify(groceryList));
          showList();
          alertMessage("item added successfully!", "alert_success");
     } else if (value && editValue) {
          formInput.focus();
          addBtn.textContent = `edit`;
     } else {
          alertMessage("add an item!", "alert_error");
     }
     formInput.value = ``;
}

// console.log(groceryList)
// localStorage.clear()

const savedItems: List[] = JSON.parse(localStorage.getItem("items")!);
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

const alertMessage = (text: string, status: string) => {
     inputAlert.innerHTML = `${text}`;
     inputAlert.classList.add(status);

     setTimeout(() => {
          inputAlert.innerHTML = ``;
          inputAlert.classList.remove(status);
     }, 1000);
}

// groceryContainer.addEventListener("click", e => {
//      e.stopImmediatePropagation();
//      const item = e.target
//      if (item.classList.contains("delete")) {
//           groceryList.filter(item => {
//                console.log(item === e.target)
//           })
//           // console.log(localStorage.key(1));
//           showList();
//           console.log(e.target.classList);
//      }
// });