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

function checkoutBook(library, title, genre) {
  // let index = library.shelves[genre].findIndex(book => book.title === title);
  let index = checkShelfIndex(library.shelves[genre], title)
  if (index !== -1) {
    library.shelves[genre].splice(index, 1);
    return `You have now checked out ${title} from the ${library.name}`
  }
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  checkShelfIndex
};
