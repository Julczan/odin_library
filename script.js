const display = document.querySelector(".display");
const button = document.querySelector(".new-book");
const dialog = document.querySelector("dialog");
const submitBtn = document.querySelector(".submit");
const inputVal = document.querySelector("input");
const form = document.querySelector("form");

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

Book.prototype.toggleRead = function () {
  if (this.wasRead) {
    this.wasRead = false;
  } else {
    this.wasRead = true;
  }
};

function displayBooks(arr) {
  display.textContent = "";
  arr.forEach((element) => {
    const newCard = document.createElement("div");
    const titleText = document.createElement("div");
    const authorText = document.createElement("div");
    const pagesText = document.createElement("div");
    const wasReadText = document.createElement("button");
    const deleteBtn = document.createElement("button");

    deleteBtn.classList.add("deleteBtn");
    deleteBtn.textContent = "Remove";

    newCard.appendChild(titleText);
    newCard.appendChild(authorText);
    newCard.appendChild(pagesText);
    newCard.appendChild(wasReadText);
    newCard.appendChild(deleteBtn);
    newCard.dataset.id = element.id;
    newCard.classList.add("card");

    deleteBtn.addEventListener("click", () => {
      let index = myLibrary.indexOf(element);
      myLibrary.splice(index, 1);
      displayBooks(myLibrary);
    });

    if (element.wasRead) {
      wasReadText.textContent = "Read";
      wasReadText.classList.add("readBtn");
    } else {
      wasReadText.textContent = "Not Read";
      wasReadText.classList.add("deleteBtn");
    }

    wasReadText.addEventListener("click", () => {
      element.toggleRead();
      displayBooks(myLibrary);
    });

    titleText.textContent += element.title;
    authorText.textContent += element.author;
    pagesText.textContent += element.pages;

    display.appendChild(newCard);
  });
}

button.addEventListener("click", () => {
  dialog.showModal();
});

submitBtn.addEventListener("click", (event) => {
  const titleForm = document.querySelector("#title").value;
  const authorForm = document.querySelector("#author").value;
  const pagesForm = document.querySelector("#pages").value;
  const wasReadForm = document.querySelector("#wasRead").checked;

  if (form.checkValidity()) {
    event.preventDefault();
    addBookToLibrary(titleForm, authorForm, pagesForm, wasReadForm);
    displayBooks(myLibrary);
    dialog.close();
    form.reset();
  } else {
    return "";
  }
});

function some() {}
