export const renderTodos = (todos, onDelete, onToggle) => {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    if (todo.completed) li.style.textDecoration = "line-through";

    li.addEventListener("click", () => onToggle(todo.id));

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent toggle on delete
      onDelete(todo.id);
    });

    li.appendChild(delBtn);
    list.appendChild(li);
  });
};
