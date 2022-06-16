function loadAndRenderTodos(notYetSavedTodos) {
  //화면에 렌더링돼있는 notYetSavedTodos를 지워서 중복을 피한다.
  todoItemsList.innerHTML = "";
  // localStorage에 저장된 todo가 있다면 불러온다. 새로고침된 경우이다.
  if (localStorage.getItem("todoAndColor") !== null) {
    todoItemsList.innerHTML = localStorage.getItem("todoAndColor");
  }
  // 아직 localStorage에 저장되지 않은 todo들을 렌더링한다.
  if (notYetSavedTodos) {
    renderNotYetSavedTodos(notYetSavedTodos);
  }
  // localStorage에서 timetable에 색깔 입힌 것 불러온다.
  if (localStorage.getItem("innerTimeTable") !== null) {
    reprint();
  }
}
function updateNotYetSavedTodos(item) {
  if (item !== "") {
    const todo = {
      id: Date.now(),
      name: item,
    };
    notYetSavedTodos.push(todo);
    todoInput.value = "";
    loadAndRenderTodos(notYetSavedTodos);
  }
}
function renderNotYetSavedTodos(todos) {
  todos.forEach(function (item) {
    const todoList = document.createElement("div");
    todoList.setAttribute("class", "todo__list flex-center");
    todoList.setAttribute("data-key", item.id);
    todoList.innerHTML = `<div class="list__subject">${item.name}</div><span class="material-icons close--btn"> close </span>`;
    todoItemsList.append(todoList);
  });
}
function deleteTodo(thisTodo, dataKey) {
  isSaved = false;
  showSaveBtn();
  todoItemsList.removeChild(thisTodo);
  // 아직 localStorage에 저장되지 않은 todo에서도 제거한다.
  notYetSavedTodos = notYetSavedTodos.filter((el) => {
    return el.id != dataKey;
  });
}
function reprint() {
  timeTable.innerHTML = localStorage.getItem("innerTimeTable");
  container.appendChild(timeTable);
}
function showSaveBtn() {
  if (isSaved) {
    document.querySelector("#save--btn").style.display = "none";
  } else document.querySelector("#save--btn").style.display = "";
}
