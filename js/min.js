/////////////// mins 생성
const container = document.querySelector(".container");
const mins = document.querySelector(".mins");
let oddMin = `<div class="mins__container__min"><div class="min"></div></div>`;
let evenMin = `<div class="mins__container"><div class="mins__container__min"><div class="min min--color"></div></div>`;

function makeOddLine() {
  let minsContainer = document.createElement("div");
  minsContainer.setAttribute("class", "mins__container");
  minsContainer.innerHTML = oddMin;
  mins.appendChild(minsContainer);
}
function makeEvenLine() {
  let minsContainer = document.createElement("div");
  minsContainer.setAttribute("class", "mins__container");
  minsContainer.innerHTML = evenMin;
  mins.appendChild(minsContainer);
}
function makeTimeLine(i) {
  let timeMin = `<div class="mins__container__min"><div class="min hour flex-center">${i}</div></div>`;
  let minsContainer = document.createElement("div");
  minsContainer.setAttribute("class", "mins__container");
  minsContainer.innerHTML = timeMin;
  mins.appendChild(minsContainer);
}
// html에 min추가하기
for (let i = 1; i < 7; i += 2) {
  console.log("for");
  makeOddLine();
  makeEvenLine();
  makeOddLine();
  makeEvenLine();
  makeOddLine();
  makeEvenLine();
  makeTimeLine(i + 6);
  makeEvenLine();
  makeOddLine();
  makeEvenLine();
  makeOddLine();
  makeEvenLine();
  makeOddLine();
  makeTimeLine(i + 7);
}
for (let i = 1; i < 13; i += 2) {
  console.log("for");
  makeOddLine();
  makeEvenLine();
  makeOddLine();
  makeEvenLine();
  makeOddLine();
  makeEvenLine();
  makeTimeLine(i);
  makeEvenLine();
  makeOddLine();
  makeEvenLine();
  makeOddLine();
  makeEvenLine();
  makeOddLine();
  makeTimeLine(i + 1);
}

///// Timetable 클릭 가능
let min = document.getElementsByClassName("min");
let colors = document.getElementsByClassName("color--container__color");

//Timetable 드래그, 우클릭, 블럭선택 막기
const timeTable = document.querySelector(".time-table");
timeTable.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

timeTable.addEventListener("dragstart", (e) => {
  e.preventDefault();
});

timeTable.addEventListener("selectstart", (e) => {
  e.preventDefault();
});

// color 클릭 => min 클릭 => 색칠
for (let a = 0; a < colors.length; a++) {
  colors[a].addEventListener("click", function () {
    let pickedColor = this.getAttribute("data-color");
    let slicePickedColor = pickedColor.substr(1, 6);

    //min 클릭하면 색칠
    Array.from(min).forEach(function (i) {
      i.onmouseenter = function (e) {
        if (e.buttons == 1) {
          removeColor(i);
          i.classList.add(slicePickedColor);
        }
        if (e.buttons == 2) {
          removeColor(i);
        }
      };
      // min들 중 첫번째로 눌리는 item
      i.onmousedown = function (e) {
        if (i.onmouseenter) {
          removeColor(i);
          i.classList.add(slicePickedColor);
        }
        if (e.buttons == 2) {
          removeColor(i);
        }
      };
    });

    //todo 클릭하면 색칠
    let subjects = document.getElementsByClassName("list__subject");
    Array.from(subjects).forEach(function (subject) {
      console.log(subjects);
      subject.onclick = function (e) {
        subject.style.color = pickedColor;
        console.log(e);
      };
      subject.oncontextmenu = function (e) {
        subject.style.color = "#594c6d";
        e.preventDefault();
      };
    });
  });
}

const todo = document.querySelector(".todo");
todo.oncontextmenu = function (e) {
  e.preventDefault();
};

function removeColor(i) {
  i.classList.remove(
    "ffe3e2",
    "fea9a4",
    "ffc079",
    "fdea9b",
    "d8f5a1",
    "b2f3bd",
    "a8d8fc",
    "bbc8ff",
    "b196fd",
    "adb5bd"
  );
}
// timetable에 색깔 입힌 것 저장하기
if (localStorage.getItem("innerTimeTable") !== null) {
  reprint();
}

document.querySelector(".save--btn").addEventListener("click", function () {
  saveTimeTable();
  saveTodoAndColor();
});

function saveTimeTable() {
  let innerTimeTable = timeTable.innerHTML;
  localStorage.setItem("innerTimeTable", innerTimeTable);
}

function reprint() {
  timeTable.innerHTML = localStorage.getItem("innerTimeTable");
  container.appendChild(timeTable);
}

// todolist에 색깔 입힌 것 저장하기
if (localStorage.getItem("todoAndColor") !== null) {
  reprintTodoColor();
}

function saveTodoAndColor() {
  let todoAndColor = todoItemsList.innerHTML;
  localStorage.setItem("todoAndColor", todoAndColor);
}

function reprintTodoColor() {
  todoItemsList.innerHTML = localStorage.getItem("todoAndColor");
  document.querySelector(".todo").appendChild(todoItemsList);
}