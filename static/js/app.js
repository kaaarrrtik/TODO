//Select DOM
const todoList = document.querySelector(".table-body");

//Event Listeners
todoList.addEventListener("click", CheckTodo);

//Functions

function CheckTodo(e) {
  const item = e.target;

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement.parentElement;
    console.log(todo)
    todo.classList.toggle("completed");
    console.log(todo);
  }
}