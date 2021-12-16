const todoInput = document.querySelector("#input");
const form = document.querySelector("#todo__form");
const todoItemsList = document.querySelector("#todo__lists");
let todos = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo(todoInput.value);
});

function addTodo(item) {
  if (item !== "") {
    const todo = {
      id: Date.now(),
      name: item,
    };
    todos.push(todo);
    addToLocalStorage(todos);
    todoInput.value = "";
  }
}

function renderTodos(todos) {
  todoItemsList.innerHTML = "";
  //make
  todos.forEach(function (item) {
    const todoList = document.createElement("div");
    todoList.setAttribute("class", "todo__list flex-center");
    todoList.setAttribute("data-key", item.id);
    todoList.innerHTML = `<div class="list__subject">${item.name}</div>
      <span class="material-icons close--btn"> close </span>`;
    todoItemsList.append(todoList);
  });
}

function addToLocalStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
  console.log(todos);
  renderTodos(todos);
}

function getFromLocalStorage() {
  const reference = localStorage.getItem("todos");
  if (reference) {
    todos = JSON.parse(reference);
    renderTodos(todos);
  }
}

getFromLocalStorage();

function deleteTodo(id) {
  // filters out the <li> with the id and updates the todos array
  todos = todos.filter(function (item) {
    // use != not !==, because here types are different. One is number and other is string
    return item.id != id;
  });

  // update the localStorage
  addToLocalStorage(todos);
}

todoItemsList.addEventListener("click", function (event) {
  // check if that is a delete-button
  if (event.target.classList.contains("close--btn")) {
    // get id from data-key attribute's value of parent <li> where the delete-button is present
    deleteTodo(event.target.parentElement.getAttribute("data-key"));
  }
});
