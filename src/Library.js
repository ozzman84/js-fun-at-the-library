function createLibrary(name) {
  let library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonfiction: []
    }
  };
  return library
}

function addBook(library, book) {
  library.shelves[book.genre].pop(book);
}

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};
