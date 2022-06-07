const colorContainer = document.querySelector(".color--container");
const colorValues = [
  "#ffe3e2",
  "#fea9a4",
  "#ffc079",
  "#fdea9b",
  "#d8f5a1",
  "#b2f3bd",
  "#a8d8fc",
  "#bbc8ff",
  "#b196fd",
  "#adb5bd",
];
for (let x of colorValues) {
  const div = document.createElement("div");
  div.className = "color--container__color";
  div.setAttribute("data-color", x);
  colorContainer.appendChild(div);
}
console.log(colorContainer);
