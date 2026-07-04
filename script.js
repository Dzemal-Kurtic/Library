const main = document.querySelector(".main");
const addBookBtn = document.querySelector("#addBook")
const bookIsRead = document.querySelector("#check")
const form = document.querySelector("#form")
form.addEventListener("submit", createBook)

let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID()
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function () {
        return `${this.title}, by ${this.author}, ${this.pages}, isRead = ${this.isRead}.`;
    }
}

function createBook(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);

    book = new Book(formValues.name, formValues.author, formValues.pages, bookIsRead.checked)
    addBookToLibrary(book)

    this.reset();
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    main.replaceChildren();

    showBooks()
}

function showBooks() {
    for (i = 0; i < myLibrary.length; i++) {
        book = myLibrary[i];
        createBookCard(book);
    }
}

function createBookCard(book) {
    const bookCard = document.createElement("div");
    bookCard.style.border = "3px solid black";
    bookCard.style.backgroundColor = "lightgreen";

    const bookTitle = document.createElement("div");
    bookTitle.textContent = book.title;
    bookCard.appendChild(bookTitle);

    const bookAuthor = document.createElement("div");
    bookAuthor.textContent = book.author;
    bookCard.appendChild(bookAuthor);

    const bookPages = document.createElement("div");
    bookPages.textContent = `${book.pages} pages`;
    bookCard.appendChild(bookPages);

    const bookIsRead = document.createElement("div");
    bookIsRead.textContent = book.isRead;
    bookCard.appendChild(bookIsRead);

    const button = document.createElement("button");
    button.innerText = "Delete";
    button.setAttribute("id", `${book.id}`);
    button.setAttribute("class", `deleteBtn`);

    button.addEventListener("click", () => {
        myLibrary = myLibrary.filter(b => b.id != book.id);
        main.replaceChildren();
        showBooks()
    })

    bookCard.appendChild(button)
    main.appendChild(bookCard);
}




