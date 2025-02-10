class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library
  }

  greetPatron(name, morning = false) {
    if (morning) {
      return 'Good morning, ' + name + '!'
    }
    return 'Hello, ' + name + '!'
  }

  findBook(bookTitle) {
    for (let genre in this.library.shelves) {
      const index = this.library.shelves[genre].findIndex(book => book.title === bookTitle)

      if (index !== -1) {
        return 'Yes, we have ' + bookTitle
      }
    }
    return 'Sorry, we do not have ' + bookTitle
  }
}

module.exports = Librarian;
