export function addBookmark(username) {
  let bookmarks = getBookmarks();
  if (!bookmarks.includes(username)) {
    bookmarks.push(username);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
}

export function getBookmarks() {
  return JSON.parse(localStorage.getItem('bookmarks')) || [];
}

export function removeBookmark(username) {
  let bookmarks = getBookmarks();
  bookmarks = bookmarks.filter(user => user !== username);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}
