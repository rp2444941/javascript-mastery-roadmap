import { getTodos, saveTodos } from "./storage.js";
import { renderTodos } from "./ui.js";

let todos = getTodos();
let filter = "all";

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const filterButtons = document.querySelectorAll("#filters button");
const clearCompletedBtn = document.getElementById("clear-completed");

const getFilteredTodos = () => {
  if (filter === "active") return todos.filter(t => !t.completed);
  if (filter === "completed") return todos.filter(t => t.completed);
  return todos;
};

const render = () => {
  renderTodos(getFilteredTodos(), deleteTodo, toggleTodo, startEditTodo);
  saveTodos(todos);
};

const addTodo = (text) => {
  todos.push({ id: Date.now(), text, completed: false });
  render();
};

const deleteTodo = (id) => {
  todos = todos.filter(t => t.id !== id);
  render();
};

const toggleTodo = (id) => {
  todos = todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
  render();
};

const startEditTodo = (id) => {
  const todo = todos.find(t => t.id === id);
  if (!todo) return;
  const newText = prompt("Edit Todo:", todo.text);
  if (newText !== null && newText.trim() !== "") {
    todo.text = newText.trim();
    render();
  }
};

const clearCompleted = () => {
  todos = todos.filter(t => !t.completed);
  render();
};

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (text) {
    addTodo(text);
    todoInput.value = "";
  }
});

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filter = btn.dataset.filter;
    render();
  });
});

clearCompletedBtn.addEventListener("click", clearCompleted);

// Initial render
render();
