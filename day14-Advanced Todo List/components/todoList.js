import { createTodoItem } from "./todoItem.js"; // ✅ imported correctly

export function renderList(todos, filter, listEl, handleChange) {
  listEl.innerHTML = "";

  let filtered = todos;
  if (filter === "completed") filtered = todos.filter((t) => t.completed);
  if (filter === "pending") filtered = todos.filter((t) => !t.completed);

  filtered.forEach((todo) => {
    const li = createTodoItem(todo, (newFn) => {
      if (typeof newFn === "function") {
        handleChange(newFn(todos)); // pass updated list
      } else {
        handleChange([...todos]); // trigger UI update
      }
    });

    listEl.appendChild(li);
  });
}
