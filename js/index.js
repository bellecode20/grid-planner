const todoInput = document.querySelector("#input");
const form = document.querySelector("#todo__form");
const todoItemsList = document.querySelector("#todo__lists");
let notYetSavedTodos = [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  updateNotYetSavedTodos(todoInput.value);
});

todoItemsList.addEventListener("click", function (event) {
  // check if that is a delete-button
  if (event.target.classList.contains("close--btn")) {
    const clickedTodo = event.target.parentElement;
    deleteTodo(clickedTodo, clickedTodo.getAttribute("data-key"));
  }
});

document.querySelector("#save--btn").addEventListener("click", function () {
  saveTimeTable();
  saveTodoAndColor();
  notYetSavedTodos = [];
});

// document.querySelector("#save--btn").style.display = "none";
console.log(notYetSavedTodos);
loadAndRenderTodos();
