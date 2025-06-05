export function createTodoItem(todo, handleChange) {
  const li = document.createElement("li");
  li.className = "todo-item";
  if (todo.completed) li.classList.add("done");

  const span = document.createElement("span");
  span.textContent = todo.text;
  span.setAttribute("contenteditable", true);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";

  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked;
    handleChange();
  });

  span.addEventListener("blur", () => {
    todo.text = span.textContent.trim();
    handleChange();
  });

  delBtn.addEventListener("click", () => {
    handleChange((prev) => prev.filter((t) => t.id !== todo.id));
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);

  return li;
}
