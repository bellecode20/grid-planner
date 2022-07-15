function renderTodos(notYetSavedTodos) {
  todoItemsList.innerHTML = "";
  // localStorage에 저장됐었던 todo, 저장되지 않은 todo로 나누어서 렌더링한다.
  if (localStorage.getItem("todoAndColor") !== null) {
    todoItemsList.innerHTML = savedTodos;
  }
  if (notYetSavedTodos) {
    renderNotYetSavedTodos(notYetSavedTodos);
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
    renderTodos(notYetSavedTodos);
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
  // todo 목록을 업데이트 한다.
  savedTodos = todoItemsList.innerHTML;
  // 저장되지 않은 todo 목록도 업데이트한다.
  notYetSavedTodos = notYetSavedTodos.filter((el) => {
    return el.id != dataKey;
  });
}
function renderTimetableFromLS() {
  if (localStorage.getItem("innerTimeTable") !== null) {
    timeTable.innerHTML = localStorage.getItem("innerTimeTable");
    container.appendChild(timeTable);
  }
}
function showSaveBtn() {
  if (isSaved) {
    document.querySelector("#save--btn").style.display = "none";
  } else document.querySelector("#save--btn").style.display = "";
}
