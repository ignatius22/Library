const form = document.querySelector('form');

const render = () =>{
	const bookSelf = document.querySelector('#book-self')
	bookSelf.innerHTML = ''
	for(let i = 0; i < myLibrary.length; i++){
		bookSelf.innerHTML += `
        <th scope="row">${myLibrary[i].pages}</th>
			  <td>${myLibrary[i].title}</td>
			  <td>${myLibrary[i].author}</td>
			  <td><p> book is ${myLibrary[i].read ? ' read' : 'unread'} </p></td>
			  <td> <a href="#" class="btn-sm read btn-primary"> change read status</a></td>
			  <td><a href="#" class="btn-sm btn-primary delete" id="delete-${i}">delete book</a></td>
		
		`
	}
}



document.querySelector('#book-self').addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        deleteBookFromLibrary(e);
        render();
    }
    if (e.target.classList.contains('read')) {
        isReadStatus(e) ;
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
    resetInput();
    render();
});