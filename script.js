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
  arr.forEach((element) => {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.textContent += element.title;
    display.appendChild(newCard);
  });
}
addBookToLibrary("Hobbit", "cotsam0", "222", "yes");
addBookToLibrary("Costam", "cotsam0", "222", "yes");
addBookToLibrary("Costam", "cotsam0", "222", "yes");
displayBooks(myLibrary);
console.log(myLibrary);
