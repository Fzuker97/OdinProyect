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

closeModal.addEventListener('click', function (event) {
    event.preventDefault();
    const bookTitle = title.value;
    const bookAuthor = author.value;
    const bookPages = pages.value;
    addBookToLibrary(bookTitle, bookAuthor, bookPages);
    modal.close();
  })

//Array Functions
let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
}

function addBookToLibrary(title, author, pages) {
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  displayLibrary();
}

// Display Array

function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayLibrary(); 
}


function displayLibrary(){
  const libraryContainer = document.getElementById('bookList');

  libraryContainer.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
        title.textContent = book.title;

    const author = document.createElement("p");
        author.textContent = "Author: " + book.author;

    const pages = document.createElement("p");
        pages.textContent = "Pages: " + book.pages;

    const check = document.createElement("button");
    if(book.read) {
      check.textContent = 'Leido';
    } else{
      check.textContent = 'No Leido';
    }
    check.addEventListener('click', () => {
      toggleReadStatus(index);
    });


    const removeButton = document.createElement("button");
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      removeBookFromLibrary(index);
    })

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(removeButton);
        card.appendChild(check);

        libraryContainer.appendChild(card);
  });
}

function removeBookFromLibrary(index){
  myLibrary.splice(index, 1);
  displayLibrary();
}

function changeCheck(){
  
}

displayLibrary();