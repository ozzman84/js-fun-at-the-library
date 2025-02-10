const { checkoutBook } = require('../src/library');

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
    this.lateFees = 0;
  }

  greetPatron(name, morning = false) {
    if (morning) {
      return 'Good morning, ' + name + '!'
    }
    return 'Hello, ' + name + '!'
  }

  findBook(bookTitle) {
    for (let genre in this.library.shelves) {
      let result = checkoutBook(this.library, bookTitle, genre);

      if (result.startsWith("You have now checked out")) {
        return 'Yes, we have ' + bookTitle
      }
    }
    return 'Sorry, we do not have ' + bookTitle
  }

  calculateLateFee(days) {
    this.lateFees += Math.round(0.25 * days);
    return this.lateFees
  }
}

module.exports = Librarian;
