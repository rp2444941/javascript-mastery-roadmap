import { getTodos, saveTodos } from "./utils/storage.js";
import { renderList } from "./components/todoList.js";

let todos = getTodos();
let filter = "all";

// DOM Elements
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const filterBtns = document.querySelectorAll(".filter");
const darkToggle = document.getElementById("dark-toggle");


function addTodo() {
  const text = input.value.trim();
  if (!text) return;

  todos.push({
    id: Date.now().toString(),
    text,
    completed: false,
  });

  input.value = "";
  update();
}

// ✅ Update UI & LocalStorage
function update() {
  saveTodos(todos);
  renderList(todos, filter, list, handleUpdate);
}

// ✅ Handle Updates from Child Components
function handleUpdate(newTodos) {
  todos = newTodos;
  update();
}

// ✅ Event Listeners
addBtn.addEventListener("click", addTodo);

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    filter = btn.dataset.filter;
    update();
  });
});

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const mode = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", mode);
});

// ✅ Load theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// ✅ Initial Render
update();
