const myLibrary = [];

class Book {
  constructor(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
  }
}


const addBookToLibrary = (book) => {
  myLibrary.push(book);
};

const deleteBook = (e) => {
  const { id } = e.target.parentElement.dataset;
  myLibrary.splice(id, 1);
};

const changeReadStatus = (e) => {
  const { id } = e.target.parentElement.dataset;
  myLibrary[id].read = !myLibrary[id].read;
};

const clearInput = () => {
  document.querySelector('#bookAuthor').value = '';
  document.querySelector('#bookTitle').value = '';
  document.querySelector('#bookPages').value = '';
  document.querySelector('#bookRead').checked = false;
};
