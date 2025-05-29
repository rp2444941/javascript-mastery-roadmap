export const renderTodos = (todos, onDelete, onToggle, onEdit) => {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    if (todo.completed) {
      li.classList.add("completed");
    }

    // Toggle on click
    li.addEventListener("click", () => onToggle(todo.id));

    // Edit on double-click
    li.addEventListener("dblclick", (e) => {
      e.stopPropagation();
      onEdit(todo.id);
    });

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      onDelete(todo.id);
    });

    li.appendChild(delBtn);
    list.appendChild(li);
  });
};
