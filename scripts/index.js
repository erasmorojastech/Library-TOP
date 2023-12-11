const myLibrary = [];

const Book = function (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const addBookToLibrary = function () {
    let title = prompt("Title");
    let author = prompt("Author");
    let pages = parseInt(prompt("Pages"));
    let read = Boolean(prompt("Read?"));

    const newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
}