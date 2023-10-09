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
    colorCode.innerHTML = `${colors[getRandomColors()]}`;
      document.body.style.backgroundColor = `${colors[getRandomColors()]}`;
      console.log(getRandomColors(), colors[getRandomColors()])
    } else {
      let hexCode = "#";
      for (let i = 0; i < 6; i++) {
        hexCode += hexColor[getRandomHexColors()];
        colorCode.innerHTML = hexCode;
        document.body.style.backgroundColor = hexCode;
      }
    }
  });
});