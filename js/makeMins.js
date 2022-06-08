const container = document.querySelector(".container");
const mins = document.querySelector(".mins");
let oddMin = `<div class="mins__container__min"><div class="min"></div></div>`;
let evenMin = `<div class="mins__container"><div class="mins__container__min"><div class="min min--color"></div></div>`;
let timeLineArr = [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function makeTimeLine(i) {
  let timeMin = `<div class="mins__container__min"><div class="min hour flex-center">${i}</div></div>`;
  let minsContainer = document.createElement("div");
  minsContainer.setAttribute("class", "mins__container");
  minsContainer.innerHTML = timeMin;
  mins.appendChild(minsContainer);
}

function makeMin(oddOrEven) {
  let minsContainer = document.createElement("div");
  minsContainer.setAttribute("class", "mins__container");
  minsContainer.innerHTML = oddOrEven;
  mins.appendChild(minsContainer);
}

function makeMinLines() {
  for (let i = 1; i <= 18; i++) {
    for (let k = 1; k <= 7; k++) {
      if (k == 7) {
        makeTimeLine(timeLineArr.shift());
      } else if (k % 2 == 1) makeMin(oddMin);
      else if (k % 2 == 0) makeMin(evenMin);
    }
  }
}

makeMinLines();
