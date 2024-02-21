const books = document.querySelector(".books");
const myLibrary = [];

for (let i = 0; i < 4; i++) {
    addBookToLibrary("example", "example", "1", true);
}

showBooksOnPage();


function Book(title = "/", author = "/", pages = "0", read = false) {
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


function showBooksOnPage() {
    for (const book of myLibrary) {
        const title = document.createElement("div");
        title.classList.add("title");
        title.textContent = book.title;

        const author = document.createElement("div");
        author.classList.add("author");
        author.textContent = "Author: " + book.author;

        const pages = document.createElement("div");
        pages.classList.add("pages");
        pages.textContent = "Pages: " + book.pages;

        const status = document.createElement("div");
        status.classList.add("status");
        if (book.read) status.textContent = "Read";
        else status.textContent = "Not read";

        const card = document.createElement("div");
        card.classList.add("book");
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(status);

        books.appendChild(card);
    }
}