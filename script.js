const addBtn = document.getElementById("add-button");
const dialog = document.querySelector("dialog");
const closeBtn = document.getElementById("cancel-button");
const submitBtn = document.getElementById("submit-button");
const body = document.querySelector("body");

addBtn.addEventListener("click", () => {
    dialog.showModal();
});

closeBtn.addEventListener("click", () => {
    dialog.close();
});

submitBtn.addEventListener("click", () => {
    addBook();
})

const myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
};

function addBook() {
    let author = document.getElementById('author').value;
    let title = document.getElementById('title').value;
    let pages = document.getElementById('pages').value;
    let read = document.querySelector('#read');

    if (read.checked) {
        read = 'Read';
    } else {
        read = 'Unread';
    };

    if (!document.getElementById("library")) {
        let library = document.createElement("div");
        library.setAttribute("id", "library");
        body.appendChild(library);
    };

    let card = document.createElement("div");
    card.setAttribute("class", "card");
    library.appendChild(card);

    let newBook = new Book(author, title, pages, read);

    myLibrary.push(newBook);
};