// const { unshelfBook } = require('../src/shelf');

function createLibrary(name) {
  let library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  };
  return library
}

function addBook(library, book) {
  library.shelves[book.genre].push(book);
}

function checkShelfIndex(shelf, title) {
  return shelf.findIndex(book => book.title === title);
}

function checkoutBook(library, bookTitle, genre) {
  let index = checkShelfIndex(library.shelves[genre], bookTitle)
  if (index !== -1) {
    // unshelfBook(bookTitle, library.shelves[genre]);
    library.shelves[genre].splice(index, 1);
    return `You have now checked out ${bookTitle} from the ${library.name}`
  }
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  checkShelfIndex
};
