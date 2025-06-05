export function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function getTodos() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}
