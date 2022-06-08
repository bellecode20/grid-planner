const todoInput = document.querySelector("#input");
const form = document.querySelector("#todo__form");
const todoItemsList = document.querySelector("#todo__lists");
let notYetSavedTodos = [];
let isSaved = true;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  isSaved = false;
  showSaveBtn();
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
  isSaved = true;
  showSaveBtn();
});

// document.querySelector("#save--btn").style.display = "none";
showSaveBtn();
loadAndRenderTodos();
console.log(isSaved);
