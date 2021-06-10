const main = document.querySelector("main");

let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.info = function () {
    return `${this.title}, by ${this.author}, ${this.pages}, isRead = ${this.isRead}.`;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function showBooks() {
    for (i = 0; i < myLibrary.length; i++) {
        book = myLibrary[i];
        createBookCard();
    }
}

function createBookCard(){
    const bookCard = document.createElement("div");
        bookCard.style.border = "3px solid blue";
        main.appendChild(bookCard);
}

// Just for now

let book1 = Object.create(Book.prototype);
book1.title = "The Hobbit";
book1.author = "JRR";
book1.pages = 233;
book1.isRead = true;

let book2 = Object.create(Book.prototype);
book1.title = "The Hobbit2";
book1.author = "JRR";
book1.pages = 233;
book1.isRead = true;
let book3 = Object.create(Book.prototype);
book1.title = "The Hobbit2";
book1.author = "JRR";
book1.pages = 233;
book1.isRead = true;
let book4 = Object.create(Book.prototype);
book1.title = "The Hobbit2";
book1.author = "JRR";
book1.pages = 233;
book1.isRead = true;
let book5 = Object.create(Book.prototype);
book1.title = "The Hobbit2";
book1.author = "JRR";
book1.pages = 233;
book1.isRead = true;
let book6 = Object.create(Book.prototype);
book1.title = "The Hobbit2";
book1.author = "JRR";
book1.pages = 233;
book1.isRead = true;
let book7 = Object.create(Book.prototype);
book1.title = "The Hobbit2";
book1.author = "JRR";
book1.pages = 233;
book1.isRead = true;
let book8 = Object.create(Book.prototype);
book1.title = "The Hobbit2";
book1.author = "JRR";
book1.pages = 233;
book1.isRead = true;
let book9 = Object.create(Book.prototype);
book1.title = "The Hobbit2";
book1.author = "JRR";
book1.pages = 233;
book1.isRead = true;
let book10 = Object.create(Book.prototype);
book1.title = "The Hobbit2";
book1.author = "JRR";
book1.pages = 233;
book1.isRead = true;
let book11 = Object.create(Book.prototype);
book1.title = "The Hobbit2";
book1.author = "JRR";
book1.pages = 233;
book1.isRead = true;
let book12 = Object.create(Book.prototype);
book1.title = "The Hobbit2";
book1.author = "JRR";
book1.pages = 233;
book1.isRead = true;
let book13 = Object.create(Book.prototype);
book1.title = "The Hobbit2";
book1.author = "JRR";
book1.pages = 233;
book1.isRead = true;
let book14 = Object.create(Book.prototype);
book1.title = "The Hobbit2";
book1.author = "JRR";
book1.pages = 233;
book1.isRead = true;
let book15 = Object.create(Book.prototype);
book1.title = "The Hobbit2";
book1.author = "JRR";
book1.pages = 233;
book1.isRead = true;

addBookToLibrary(book1);
addBookToLibrary(book2);
// console.log(myLibrary);
addBookToLibrary(book3);
addBookToLibrary(book4);
// console.log(myLibrary);
addBookToLibrary(book5);
addBookToLibrary(book6);
// console.log(myLibrary);
addBookToLibrary(book7);
addBookToLibrary(book8);
// console.log(myLibrary);
addBookToLibrary(book9);
addBookToLibrary(book10);
// console.log(myLibrary);
addBookToLibrary(book11);
addBookToLibrary(book12);
// console.log(myLibrary);
addBookToLibrary(book13);
addBookToLibrary(book14);
// console.log(myLibrary);
addBookToLibrary(book15);
addBookToLibrary(book8);
// console.log(myLibrary);


showBooks();


