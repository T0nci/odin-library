const myLibrary = [];


function Book(title = "/", author = "/", pages = 0, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        if (this.read) {
            return `${this.title} by ${this.author}, ${this.pages} pages, read`;
        } else {
            return `${this.title} by ${this.author}, ${this.pages} pages, not read`;
        }
    }
}


function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.unshift(book);
}