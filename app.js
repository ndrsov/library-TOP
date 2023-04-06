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
  renderDB() {
    for (const bookDom of this.books) {
      const bookCard = document.createElement('div');
      bookCard.innerHTML = `<p class='book-title'>${bookDom.title}</p>
      <p class='book-author'>${bookDom.author}</p>
      <p class='book-year'>${bookDom.year}</p>
      <small class='book-pages'>${bookDom.pages} pages</small>
      <span class='book-status'>${bookDom.readed ? 'Read' : 'Not Read'}</span>
      <span class='book-remove-btn'>x</span>`;
      bookCard.classList.add('book-card');

      console.log(bookCard);
      booksContainer.append(bookCard);
    }
  }
}

// Initialize the library
const myLibrary = new Library();

// Get the DOM elements
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
  const readed = bookForm.querySelector('#readed').value;

  // Create a new Book object
  const book = new Book(title, author, pages, year, readed);

  // Add the new book to the library
  myLibrary.addBook(book);

  // Reset the form
  bookForm.reset();
  toggleFormVisibility();
});

// Adding dummy data to Library class
(() => {
  for (const dummyBook of dummyData) {
    myLibrary.addBook(dummyBook);
  }
  myLibrary.renderDB();
})();

// Book card markup
/* <div class='book-card'>
  <p class='book-title'>This is a title</p>
  <p class='book-author'>By this guy</p>
  <p class='book-year'>1997</p>
  <small class='book-pages'>123 pages</small>
  <span class='book-status'>Read</span>
  <span class='book-remove-btn'>x</span>
</div>; */
