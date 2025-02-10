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

  findBook(book) {
    for (let genre in this.library.shelves) {
      const index = this.library.shelves[genre].findIndex(item => item.title === book.title)

      if (index !== -1) {
        return 'Sorry, we do not have ' + book
      } else {
        return 'Yes, we have ' + book
      }
    }
  }
}

module.exports = Librarian;
