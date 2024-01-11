const colorCode: Element = document.querySelector(".color_name")!;
const btns = document.querySelectorAll(".btn");
const colors = [
  "chocolate",
  "cadetblue",
  "brown",
  "cornflowerblue",
  "darkcyan",
  "darkolivegreen",
  "darkblue",
  "darkslateblue",
  "mediumvioletred",
  "rosybrown",
  "darkred",
  "teal"
];
const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const getRandomColors = () => {
  return Math.floor(Math.random() * colors.length);
};

const getRandomHexColors = () => {
  return Math.floor(Math.random() * hexColor.length);
};


btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("color_btn")) {
      const randomNum = getRandomColors();
      colorCode.innerHTML = colors[randomNum];
      document.body.style.backgroundColor = colors[randomNum];
    } else {
      let hexCode = "#";
      for (let i = 0; i < 6; i++) {
        hexCode += hexColor[getRandomHexColors()];
        colorCode.innerHTML = hexCode;
        document.body.style.backgroundColor = `${hexCode}`;
      }
    }
  });
});


const colorCode: Element = document.querySelector(".color_name")!;
const btns = document.querySelectorAll(".btn");
const colors = [
  "chocolate",
  "cadetblue",
  "brown",
  "cornflowerblue",
  "darkcyan",
  "darkolivegreen",
  "darkblue",
  "darkslateblue",
  "mediumvioletred",
  "rosybrown",
  "darkred",
  "teal"
];
const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const getRandomColors = () => {
  return Math.floor(Math.random() * colors.length);
};

const getRandomHexColors = () => {
  return Math.floor(Math.random() * hexColor.length);
};


btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("color_btn")) {
      const randomNum = getRandomColors();
      colorCode.innerHTML = colors[randomNum];
      document.body.style.backgroundColor = colors[randomNum];
    } else {
      let hexCode = "#";
      for (let i = 0; i < 6; i++) {
        hexCode += hexColor[getRandomHexColors()];
        colorCode.innerHTML = hexCode;
        document.body.style.backgroundColor = `${hexCode}`;
      }
    }
  });
});
