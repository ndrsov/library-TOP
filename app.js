// Dummy db
let dummyData = [
  {
    name: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    pages: 281,
    readed: true,
  },
  {
    name: '1984',
    author: 'George Orwell',
    year: 1949,
    pages: 328,
    readed: false,
  },
  {
    name: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    pages: 180,
    readed: true,
  },
  {
    name: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    pages: 224,
    readed: false,
  },
  {
    name: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932,
    pages: 311,
    readed: true,
  },
  {
    name: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    pages: 310,
    readed: true,
  },
  {
    name: 'The Bell Jar',
    author: 'Sylvia Plath',
    year: 1963,
    pages: 288,
    readed: false,
  },
  {
    name: 'Slaughterhouse-Five',
    author: 'Kurt Vonnegut',
    year: 1969,
    pages: 215,
    readed: true,
  },
  {
    name: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954,
    pages: 1178,
    readed: false,
  },
  {
    name: 'Animal Farm',
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
}

// Initialize the library
const myLibrary = new Library();

// Get the DOM elements
const booksContainer = document.querySelector('#books-container');
const toggleFormBtn = document.querySelector('#btn-open-form');
const formContainer = document.querySelector('.form-container');
const closeBtn = document.querySelector('.close-btn');

const bookForm = document.getElementById('book-form');

// Toggle form visibility
const formToggler = () => {
  formContainer.classList.toggle('hidden');
  toggleFormBtn.classList.toggle('hidden');
};

toggleFormBtn.addEventListener('click', formToggler);
closeBtn.addEventListener('click', formToggler);

// Handle form submit event
bookForm.addEventListener('submit', (e) => {
  // Prevent the default form submission
  e.preventDefault();

  // Get the form inputs
  const title = bookForm.querySelector('#title').value;
  const author = bookForm.querySelector('#author').value;
  const pages = bookForm.querySelector('#pages').value;
  const year = bookForm.querySelector('#year').value;
  const readed = bookForm.querySelector('#readed').value;

  // Create a new Book object
  const book = new Book(title, author, pages, year, readed);

  // Add the new book to the library
  myLibrary.addBook(book);

  // Reset the form
  bookForm.reset();
});

// Adding dummy data to Library class
(() => {
  for (const dummyBook of dummyData) {
    myLibrary.addBook(dummyBook);
  }
})();
