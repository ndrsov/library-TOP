// Dummy db
let dummyData = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    pages: 281,
    readed: true,
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    pages: 328,
    readed: false,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    pages: 180,
    readed: true,
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    pages: 224,
    readed: false,
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932,
    pages: 311,
    readed: true,
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    pages: 310,
    readed: true,
  },
  {
    title: 'The Bell Jar',
    author: 'Sylvia Plath',
    year: 1963,
    pages: 288,
    readed: false,
  },
  {
    title: 'Slaughterhouse-Five',
    author: 'Kurt Vonnegut',
    year: 1969,
    pages: 215,
    readed: true,
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954,
    pages: 1178,
    readed: false,
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    year: 1945,
    pages: 112,
    readed: true,
  },
];

// Define the Book class
class Book {
  constructor(title, author, pages, year, readed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.readed = readed;
  }
}

// Define the Library class
class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  getBook(index) {
    return this.books[index];
  }

  getAllBooks() {
    return this.books;
  }
  createNewEl(book) {
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const year = document.createElement('p');
    const pages = document.createElement('small');
    const readed = document.createElement('span');
    const removeBtn = document.createElement('span');

    // Add classes
    bookCard.classList.add('book-card');
    title.classList.add('book-title');
    author.classList.add('book-author');
    year.classList.add('book-year');
    pages.classList.add('book-pages');
    readed.classList.add('book-status');
    readed.classList.add('book-status');
    book.readed ? '' : readed.classList.add('unread');
    removeBtn.classList.add('book-remove-btn');

    // Add correct data
    title.textContent = book.title;
    author.textContent = book.author;
    year.textContent = book.year;
    pages.textContent = book.pages;
    readed.textContent = book.readed ? 'Read' : 'Not Read';
    removeBtn.textContent = 'x';

    // Create book element
    bookCard.append(title, author, year, pages, readed, removeBtn);
    // Appen final element
    booksContainer.append(bookCard);
  }

  renderDB() {
    for (const book of this.books) {
      this.createNewEl(book);
    }
  }
}

// Initialize the library
const myLibrary = new Library();

// Get the Fom DOM elements
const booksContainer = document.querySelector('#books-container');
const bookForm = document.getElementById('book-form');
const overlay = document.querySelector('.overlay');
const toggleFormBtn = document.querySelector('#btn-open-form');
const formContainer = document.querySelector('.form-container');
const closeBtn = document.querySelector('.close-btn');

// Reusable functions
const toggleFormVisibility = () => {
  overlay.classList.toggle('hidden');
  formContainer.classList.toggle('hidden');
};

// Show/Hide form
toggleFormBtn.addEventListener('click', toggleFormVisibility);
closeBtn.addEventListener('click', toggleFormVisibility);

// Handle form submit event
bookForm.addEventListener('submit', (e) => {
  // Prevent the default form submission
  e.preventDefault();

  // Get the form inputs
  const title = bookForm.querySelector('#title').value;
  const author = bookForm.querySelector('#author').value;
  const pages = bookForm.querySelector('#pages').value;
  const year = bookForm.querySelector('#year').value;
  const readed = bookForm.querySelector('#readed').checked;

  // Create a new Book object
  const book = new Book(title, author, pages, year, readed);

  // Add the new book to the library
  myLibrary.addBook(book);
  myLibrary.createNewEl(book);

  // Reset the form
  bookForm.reset();
  toggleFormVisibility();
  addInteractiveness();
});

// Adding dummy data to Library class
(() => {
  for (const dummyBook of dummyData) {
    myLibrary.addBook(dummyBook);
  }
  myLibrary.renderDB();
  addInteractiveness();
})();

function addInteractiveness() {
  // Delete book from library and DB
  const removeBookBtns = document.querySelectorAll('.book-remove-btn');
  const btnsArray = [...removeBookBtns];
  btnsArray.forEach((item, i) => {
    item.addEventListener('click', function (e) {
      const deleteBook = myLibrary.getBook(i);
      const itemCard = e.target.parentElement;
      console.log(itemCard);
      myLibrary.removeBook(deleteBook);
      booksContainer.removeChild(itemCard);
    });
  });
  // Change readed status from book
  const readedStatus = document.querySelectorAll('.book-status');
  const toggleArray = [...readedStatus];
  toggleArray.forEach((item, i) => {
    item.addEventListener('click', function (e) {
      const foundBook = myLibrary.getBook(i);
      const foundStatus = e.target;
      foundBook.readed = !foundBook.readed;
      foundStatus.textContent = foundBook.readed ? 'Read' : 'Not Read';
      foundStatus.classList.toggle('unread');
    });
  });
}
