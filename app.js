let myLibrary = [
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    pages: 456,
    readed: false,
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    pages: 281,
    readed: true,
  },
  {
    title: '1984',
    author: 'George Orwell',
    pages: 328,
    readed: false,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    pages: 180,
    readed: true,
  },
];

const bookContainer = document.getElementById('books-container');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${title} by ${author}. ${pages} pages.${
    this.readed === true ? 'readed.' : 'not read yet.'
  }`;
};

function addBookToLibrary(input) {
  myLibrary.push(input);
}

function displayBooks() {
  for (const book of myLibrary) {
    const newBook = document.createElement('div');
    newBook.innerHTML = `<p>${book.title}</p>`;
    newBook.classList.add('book-card');
    bookContainer.append(newBook);
  }
}

displayBooks();
