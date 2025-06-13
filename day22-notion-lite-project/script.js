const pageListEl = document.getElementById("pageList");
const noteContentEl = document.getElementById("noteContent");
const pageTitleEl = document.getElementById("pageTitle");
const addPageBtn = document.getElementById("addPageBtn");
const deletePageBtn = document.getElementById("deletePageBtn");
const toggleThemeBtn = document.getElementById("toggleTheme");

let pages = JSON.parse(localStorage.getItem("pages")) || [];
let activePageId = null;

function savePages() {
  localStorage.setItem("pages", JSON.stringify(pages));
}

function renderPages() {
  pageListEl.innerHTML = "";
  pages.forEach((page) => {
    const li = document.createElement("li");
    li.textContent = page.title;
    li.dataset.id = page.id;
    li.classList.toggle("active", page.id === activePageId);
    li.onclick = () => selectPage(page.id);
    pageListEl.appendChild(li);
  });
}

function selectPage(id) {
  activePageId = id;
  const page = pages.find((p) => p.id === id);
  pageTitleEl.textContent = page.title;
  noteContentEl.innerHTML = page.content || "";
  renderPages();
}

function addPage() {
  const title = prompt("Page Title?");
  if (!title) return;
  const newPage = { id: Date.now().toString(), title, content: "" };
  pages.push(newPage);
  savePages();
  renderPages();
}

function deletePage() {
  if (!activePageId) return;
  if (!confirm("Delete this page?")) return;
  pages = pages.filter((p) => p.id !== activePageId);
  activePageId = null;
  noteContentEl.innerHTML = "";
  pageTitleEl.textContent = "Select a Page";
  savePages();
  renderPages();
}

noteContentEl.addEventListener("input", () => {
  const page = pages.find((p) => p.id === activePageId);
  if (page) {
    page.content = noteContentEl.innerHTML;
    savePages();
  }
});

addPageBtn.onclick = addPage;
deletePageBtn.onclick = deletePage;
toggleThemeBtn.onclick = () => {
  document.body.classList.toggle("dark");
};

renderPages();
