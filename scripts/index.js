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

const renderLibraryCards = function () {
    const library = document.querySelector("#library")

    const myLibraryCards = myLibrary.map((e) => {
        return (`<div class="book-card">
            <h2>${e.title}</h2>
            <h3>${e.author}</h3>
            <p>${e.pages}</p>
            <p>${e.read}</p>
        </div>`)
    });

    library.innerHTML = "";
    myLibraryCards.forEach((e, i) => {
        const newChild = document.createElement('div');
        newChild.setAttribute("class", "book-card")
        newChild.innerHTML = e;
        library.appendChild(newChild);
    })
}
