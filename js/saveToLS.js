function saveTimeTable() {
  let innerTimeTable = timeTable.innerHTML;
  localStorage.setItem("innerTimeTable", innerTimeTable);
}

function saveTodoAndColor() {
  let todoAndColor = todoItemsList.innerHTML;
  localStorage.setItem("todoAndColor", todoAndColor);
}
