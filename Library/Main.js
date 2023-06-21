//Variables
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');

// MODAL
const modal = document.querySelector('.modalContent'); 
const openModal = document.querySelector('#addBtn');
const closeModal = document.querySelector('#submit')


openModal.addEventListener('click', () => {
  modal.showModal();
})

closeModal.addEventListener('click', () => {
  modal.close();
})

//Array Functions
let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  
}

function addBookToLibrary(title, author, pages) {
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);

}

// Display Array

function displayLibrary(){
  const libraryContainer = document.getElementById('#bookList');

  libraryContainer.innerHTML = "";

  myLibrary.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
        title.textContent = book.title;

    const author = document.createElement("p");
        author.textContent = "Author: " + book.author;

    const pages = document.createElement("p");
        pages.textContent = "Pages: " + book.pages;

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);

        libraryContainer.appendChild(card);
  });
}


displayLibrary();