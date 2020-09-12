const form = document.querySelector('.form');

const render = () => {
  const booksctn = document.querySelector('#books-ctn');
  booksctn.innerHTML = '';

  for (let i = 0; i < myLibrary.length; i++) {
    booksctn.innerHTML += ` 
    <div class= "container col-4 mb-3">
      <div class="card card-sh mt-2 bg-frm" >
        <div class="card-body" data-id=${i}>
          <h5 class="card-title"> ${myLibrary[i].title} </h5>
          <p class="card-text"> ${myLibrary[i].title} is written by ${myLibrary[i].author} and it has ${myLibrary[i].pages} pages </p>
          <p> book is ${myLibrary[i].read ? ' read' : 'unread'} </p>
          
          <a href="#" class=" read "> change read status </a>
          <br>
          <a href="#" class=" delete" id="delete-${i}">delete book</a>
         
        </div>
      </div>
    `;
  }
};

document.querySelector('#books-ctn').addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('delete')) {
    deleteBook(e);
    render();
  }
  if (e.target.classList.contains('read')) {
    changeReadStatus(e);
    render();
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const author = document.querySelector('#bookAuthor').value;
  const title = document.querySelector('#bookTitle').value;
  const pages = document.querySelector('#bookPages').value;
  const read = document.querySelector('#bookRead').checked;
  const book = new Book(author, title, pages, read);
  addBookToLibrary(book);
  clearInput();
  render();
});