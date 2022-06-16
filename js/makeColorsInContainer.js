const colorContainer = document.querySelector(".color--container");
const colorValues = [
  "#ff6193",
  "#fea4a4",
  "#ffc079",
  "#fde203",
  "#89d9a0",
  "#009369",
  "#9fcef2",
  "#4c72fc",
  "#b08cef",
  "#adb5bd",
];
for (let x of colorValues) {
  const div = document.createElement("div");
  div.className = "color--container__color";
  div.setAttribute("data-color", x);
  div.style.backgroundColor = x;
  colorContainer.appendChild(div);
}
