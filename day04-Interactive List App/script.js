const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const itemList = document.getElementById("itemList");

let items = []; // Stores all items as objects (reference based)

function createListItem(item, index) {
  const li = document.createElement("li");
  li.innerText = item.text;
  if (item.completed) li.classList.add("completed");

  // Toggle on click
  li.addEventListener("click", () => {
    item.completed = !item.completed; // Reference update
    renderItems();
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.classList.add("delete");
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent li click
    items.splice(index, 1); // Remove from array
    renderItems();
  });

  li.appendChild(delBtn);
  return li;
}

function renderItems() {
  itemList.innerHTML = ""; // Clear list
  items.forEach((item, index) => {
    const li = createListItem(item, index);
    itemList.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  const text = itemInput.value.trim();
  if (text !== "") {
    items.push({ text, completed: false }); // reference based object
    itemInput.value = "";
    renderItems();
  }
});
