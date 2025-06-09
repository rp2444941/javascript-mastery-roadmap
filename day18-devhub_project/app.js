import { getUserProfile } from './utils/api.js';
import { renderProfile, renderBookmarks } from './utils/dom.js';
import { addBookmark, getBookmarks, removeBookmark } from './utils/storage.js';

const input = document.getElementById('searchInput');
const profileDiv = document.getElementById('profile');
const bookmarksUL = document.getElementById('bookmarks');
const themeBtn = document.getElementById('themeToggle');

input.addEventListener('keyup', async (e) => {
  if (e.key === 'Enter') {
    const username = input.value.trim();
    if (username) {
      const user = await getUserProfile(username);
      renderProfile(user, profileDiv);
    }
  }
});

profileDiv.addEventListener('click', (e) => {
  if (e.target.classList.contains('bookmark')) {
    const username = e.target.dataset.username;
    addBookmark(username);
    renderBookmarks(bookmarksUL);
  }
});

bookmarksUL.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    removeBookmark(e.target.dataset.username);
    renderBookmarks(bookmarksUL);
  }
});

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

renderBookmarks(bookmarksUL);
