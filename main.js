Book.prototype.info = function() {
    if (this.read) {
        return `${this.title} by ${this.author}, ${this.pages} pages, read`;
    } else {
        return `${this.title} by ${this.author}, ${this.pages} pages, not read`;
    }
}


const booksDiv = document.querySelector(".books");

const newBookButton = document.querySelector(".add-book");
const dialog = document.querySelector(".header dialog");
const closeDialogButton = document.querySelector("dialog .close-btn");

const dialogForm = document.querySelector("dialog form");
const titleField = document.querySelector("#title");
const authorField = document.querySelector("#author");
const pagesField = document.querySelector("#pages");
const readField = document.querySelector("#read");

const myLibrary = [];

for (let i = 0; i < 4; i++) {
    addBookToLibrary("example", "example", "" + i, true);
}

showBooksOnPage();

newBookButton.addEventListener("click", (event) => {
    dialog.showModal();
});

closeDialogButton.addEventListener("click", (event) => {
    dialog.close();
});

dialogForm.addEventListener('submit', (event) => {
    event.preventDefault();

    addBookToLibrary(
        titleField.value,
        authorField.value,
        pagesField.value,
        readField.checked
    );
    showBooksOnPage();

    dialog.close();
    dialogForm.reset();
});


function Book(title = "/", author = "/", pages = "0", read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.unshift(book); /* Using unshift to show older books last */
}


function showBooksOnPage() {
    booksDiv.textContent = ''; /* Ensure the booksDiv is empty */

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
        else status.textContent = "Not Read";

        const id = myLibrary.findIndex((val) => val === book);

        const changeStatusButton = document.createElement("button");
        changeStatusButton.classList.add("change-status");
        changeStatusButton.textContent = "Read Status";

        enableStatusChange(changeStatusButton, id);

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove");
        removeButton.textContent = "Remove";

        enableDeletion(removeButton, id);
            
        const card = document.createElement("div");
        card.classList.add("book");
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(status);
        card.appendChild(changeStatusButton);
        card.appendChild(removeButton);

        booksDiv.appendChild(card);
    }
}


function enableDeletion(btn, id) {
    btn.dataset.id = id;

    btn.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id;

        myLibrary.splice(id, 1);

        showBooksOnPage();
    });
}


function enableStatusChange(btn, id) {
    btn.dataset.id = id;

    btn.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id;
        const book = myLibrary[id];

        if (book.read) {
            book.read = false;
        } else {
            book.read = true;
        }

        showBooksOnPage();
    });
}