export function renderProfile(user, container) {
  if (!user) return;
  container.innerHTML = `
    <div class="card">
      <img src="${user.avatar_url}" width="100" />
      <h2>${user.name} (@${user.login})</h2>
      <p>${user.bio || 'No bio available'}</p>
      <button class="bookmark" data-username="${user.login}">⭐ Bookmark</button>
    </div>
  `;
}

export function renderBookmarks(container) {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  container.innerHTML = bookmarks.map(user => `
    <li>
      ${user} <button class="remove" data-username="${user}">❌</button>
    </li>
  `).join('');
}
