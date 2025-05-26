const display = document.querySelector(".display");
const button = document.querySelector("button");
const dialog = document.querySelector("dialog");

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
    const titleText = document.createElement("div");
    const authorText = document.createElement("div");
    const pagesText = document.createElement("div");
    const wasReadText = document.createElement("div");

    newCard.appendChild(titleText);
    newCard.appendChild(authorText);
    newCard.appendChild(pagesText);
    newCard.appendChild(wasReadText);
    newCard.classList.add("card");

    titleText.textContent += element.title;
    authorText.textContent += element.author;
    pagesText.textContent += element.pages;
    wasReadText.textContent += element.wasRead;

    display.appendChild(newCard);
  });
}

button.addEventListener("click", () => {
  dialog.showModal();
});

addBookToLibrary("Costam", "ew", "222", "yes");
addBookToLibrary("Costam", "ew", "222", "yes");
addBookToLibrary("Costam", "cotsam0", "222", "yes");
displayBooks(myLibrary);
console.log(myLibrary);
