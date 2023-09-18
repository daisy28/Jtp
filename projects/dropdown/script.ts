const groups = document.querySelectorAll(".group");

groups.forEach(group => {
     const toggle: Element = group.querySelector(".toggle")!;
     toggle.addEventListener("click", () => {
          groups.forEach(group => {
               if (group !== toggle) {
                    group.classList.remove("show_answer");
               };
          });
          group.classList.toggle("show_answer");
     });
})