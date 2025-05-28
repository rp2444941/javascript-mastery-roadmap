import { getTodos, saveTodos } from "./storage.js";
import { renderTodos } from "./ui.js";

let todos = getTodos();

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");

const addTodo = (text) => {
  todos.push({ id: Date.now(), text, completed: false });
  saveTodos(todos);
  renderTodos(todos, deleteTodo, toggleTodo);
};

const deleteTodo = (id) => {
  todos = todos.filter((t) => t.id !== id);
  saveTodos(todos);
  renderTodos(todos, deleteTodo, toggleTodo);
};

const toggleTodo = (id) => {
  todos = todos.map((t) =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  saveTodos(todos);
  renderTodos(todos, deleteTodo, toggleTodo);
};

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (text) {
    addTodo(text);
    todoInput.value = "";
  }
});

// Initial render
renderTodos(todos, deleteTodo, toggleTodo);
