class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library
  }

  greetPatron(name, morning = false) {
    if (morning === false) {
      return 'Hello, ' + name + '!'
    } else {
      return 'Good morning, ' + name + '!'
    }
  }

  findBook(book) {
    const bookShelve = Object.keys(this.library.shelves)

    if (this.library[book.genre].includes(book)) {
      return 'Yes, we have ' + book
    } else {
      return 'Sorry, we do not have ' + book
    }
  }
}

module.exports = Librarian;
