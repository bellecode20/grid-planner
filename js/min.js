///// Timetable 클릭 가능
let min = document.getElementsByClassName("min");
let colors = document.getElementsByClassName("color--container__color");
const todo = document.querySelector(".todo");

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
    isSaved = false;
    showSaveBtn();
    let pickedColor = this.getAttribute("data-color");
    let slicePickedColor = pickedColor.substr(1, 6);

    //min 클릭하면 색칠
    Array.from(min).forEach(function (i) {
      i.onmouseenter = function (e) {
        if (e.buttons == 1) {
          i.style.backgroundColor = `#${slicePickedColor}`;
        }
        if (e.buttons == 2) {
          isSaved = false;
          showSaveBtn();
          removeColor(i);
        }
      };
      // min들 중 첫번째로 눌리는 item
      i.onmousedown = function (e) {
        if (i.onmouseenter) {
          i.style.backgroundColor = `#${slicePickedColor}`;
        }
        if (e.buttons == 2) {
          isSaved = false;
          showSaveBtn();
          removeColor(i);
        }
      };
    });

    //todo 클릭하면 색칠
    let subjects = document.getElementsByClassName("list__subject");
    Array.from(subjects).forEach(function (subject) {
      subject.onclick = function (e) {
        subject.style.color = pickedColor;
      };
      subject.oncontextmenu = function (e) {
        subject.style.color = "#594c6d";
        e.preventDefault();
      };
    });
  });
}

todo.oncontextmenu = function (e) {
  e.preventDefault();
};

function removeColor(i) {
  //짝수번째인 min칸인 경우이다.
  if (i.classList.contains("min--color")) {
    i.style.backgroundColor = "#dddddd";
  } else {
    //홀수번째인 min칸인 경우이다.
    i.style.backgroundColor = "#d8d5de";
  }
}
