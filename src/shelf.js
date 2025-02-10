const { checkShelfIndex } = require('../src/library');

function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

function unshelfBook(bookTitle, shelf) {
  let index = checkShelfIndex(shelf, bookTitle);
  shelf.splice(index, 1);
}

function listTitles(shelf) {
  let titles = ''
  for (let book in shelf) {
    titles += book.title;
  }
  return titles
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};