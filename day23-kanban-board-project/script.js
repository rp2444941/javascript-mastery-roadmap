const board = document.getElementById("board");
const addColumnBtn = document.getElementById("addColumn");
const toggleThemeBtn = document.getElementById("toggleTheme");

let boardData = JSON.parse(localStorage.getItem("kanbanData")) || [];

function saveData() {
  localStorage.setItem("kanbanData", JSON.stringify(boardData));
}

function createColumn(name, cards = []) {
  const col = document.createElement("div");
  col.className = "column";

  const title = document.createElement("h2");
  title.textContent = name;
  col.appendChild(title);

  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";
  col.appendChild(cardContainer);

  cards.forEach(text => {
    const card = createCard(text);
    cardContainer.appendChild(card);
  });

  const input = document.createElement("input");
  input.placeholder = "New task...";
  col.appendChild(input);

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && input.value.trim() !== "") {
      const card = createCard(input.value.trim());
      cardContainer.appendChild(card);
      updateBoardData();
      input.value = "";
    }
  });

  board.appendChild(col);
}

function createCard(text) {
  const card = document.createElement("div");
  card.className = "card";
  card.draggable = true;
  card.textContent = text;

  card.addEventListener("dragstart", () => {
    card.classList.add("dragging");
  });

  card.addEventListener("dragend", () => {
    card.classList.remove("dragging");
    updateBoardData();
  });

  return card;
}

board.addEventListener("dragover", (e) => {
  e.preventDefault();
  const dragging = document.querySelector(".dragging");
  const containers = document.elementsFromPoint(e.clientX, e.clientY);
  const column = containers.find(el => el.classList && el.classList.contains("card-container"));
  if (column) {
    column.appendChild(dragging);
  }
});

function updateBoardData() {
  const columns = board.querySelectorAll(".column");
  boardData = [];
  columns.forEach(col => {
    const title = col.querySelector("h2").textContent;
    const cards = Array.from(col.querySelectorAll(".card")).map(c => c.textContent);
    boardData.push({ name: title, cards });
  });
  saveData();
}

function renderBoard() {
  board.innerHTML = "";
  boardData.forEach(col => createColumn(col.name, col.cards));
}

addColumnBtn.onclick = () => {
  const name = prompt("Enter column name:");
  if (name) {
    boardData.push({ name, cards: [] });
    saveData();
    renderBoard();
  }
};

toggleThemeBtn.onclick = () => {
  document.body.classList.toggle("dark");
};

renderBoard();
