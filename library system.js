class LibraryItem {
  static totalItems = 0;

  constructor(title, year) {
    this.title = title;
    this.year = year;
    this.isBorrowed = false;
    LibraryItem.totalItems++;
  }

  // Meant to be overridden by subclasses
  calculateLateFee(daysLate) {
    throw new Error("calculateLateFee() must be implemented by subclass");
  }

  describe() {
    return `${this.title} (${this.year})`;
  }
}

class Book extends LibraryItem {
  constructor(title, year, author) {
    super(title, year);
    this.author = author;
  }

  calculateLateFee(daysLate) {
    return daysLate * 0.5;
  }

  describe() {
    return `Book: ${super.describe()} by ${this.author}`;
  }
}

class DVD extends LibraryItem {
  constructor(title, year, durationMinutes) {
    super(title, year);
    this.durationMinutes = durationMinutes;
  }

  calculateLateFee(daysLate) {
    return daysLate * 2;
  }

  describe() {
    return `DVD: ${super.describe()} [${this.durationMinutes} min]`;
  }
}

class Member {
  static MAX_ITEMS = 2;

  constructor(name) {
    this.name = name;
    this.borrowedItems = [];
  }

  borrow(item) {
    if (item.isBorrowed) {
      console.log(`"${item.title}" is already borrowed.`);
      return;
    }
    if (this.borrowedItems.length >= Member.MAX_ITEMS) {
      console.log(
        `${this.name} has reached the limit of ${Member.MAX_ITEMS} items.`,
      );
      return;
    }
    item.isBorrowed = true;
    this.borrowedItems.push(item);
    console.log(`${this.name} borrowed ${item.describe()}`);
  }

  returnItem(item, daysLate = 0) {
    const index = this.borrowedItems.indexOf(item);
    if (index === -1) {
      console.log(`${this.name} doesn't have "${item.title}".`);
      return;
    }
    this.borrowedItems.splice(index, 1);
    item.isBorrowed = false;

    const fee = item.calculateLateFee(daysLate);
    console.log(
      `${this.name} returned "${item.title}"` +
        (fee > 0 ? ` | Late fee: $${fee.toFixed(2)}` : ""),
    );
  }
}

// Test it
const book1 = new Book("Clean Code", 2008, "Robert C. Martin");
const book2 = new Book("The Pragmatic Programmer", 1999, "Andrew Hunt");
const dvd1 = new DVD("Inception", 2010, 148);

const ali = new Member("Ali");
ali.borrow(book1);
ali.borrow(dvd1);
ali.borrow(book2); // fails: limit reached
ali.borrow(book1); // fails: already borrowed

ali.returnItem(book1, 4); // fee: $2.00
ali.returnItem(dvd1, 3); // fee: $6.00

console.log(`Total items created: ${LibraryItem.totalItems}`); // 3
