const myLibrary = []

class Book {
	constructor(author, title, pages, read){
		this.author = author
		this.title = title;
		this.pages = pages;
		this.read = read;
	}
}

const addBookToLibrary = (book) => {
	if(book.title === '' || book.author === '' || book.pages === ''){
		alert("field can't be blank");
		else{
			myLibrary.push(book)
		}
	}
}

const deleteBookFromLibrary = (e) =>{
	const {id} = e.target.parentElement.dataset;
	myLibrary.splice(id, 1);
}

const isReadStatus  = (e) =>{
	const {id} = e.target.parentElement.dataset;
	myLibrary[id].read = !myLibrary[id].read
}

