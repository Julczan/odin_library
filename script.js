const display = document.querySelector(".display");

const myLibrary = [];

function Book(id, title, author, pages, wasRead) {
  if (!new.target) {
    throw Error("You must use the 'new' operator");
  }
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.wasRead = wasRead;
}

function addBookToLibrary(title, author, pages, wasRead) {
  let id = crypto.randomUUID();
  let book = new Book(id, title, author, pages, wasRead);
  myLibrary.push(book);
}

function displayBooks(arr) {
  arr.forEach((item) => {
    let title = item.title;
    let author = item.author;
    let pages = item.pages;
    let wasRead = item.wasRead;
    display.textContent = title + author + pages + wasRead;
  });
}
addBookToLibrary("Hobbit", "cotsam0", "222", "yes");
displayBooks(myLibrary);
