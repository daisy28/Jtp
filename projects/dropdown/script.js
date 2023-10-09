"use strict";
const groups = document.querySelectorAll(".group");
groups.forEach((group) => {
    const toggle = group.querySelector(".toggle");
    toggle.addEventListener("click", () => {
        groups.forEach((item) => {
            if (item !== group) {
                item.classList.remove("show_answer");
            }
        });
        group.classList.toggle("show_answer");
    });
});
