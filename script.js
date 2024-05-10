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

    let newBook = new Book(author, title, pages, read);

    let card = document.createElement("div");
    card.setAttribute("class", "card");
    library.appendChild(card);

    let authLine = document.createElement("p");
    authLine.setAttribute("class", "modal-text");
    authLine.textContent = 'Author: ';
    let titleLine = document.createElement("p");
    titleLine.setAttribute("class", "modal-text");
    titleLine.textContent = 'Title: ';
    let pagesLine = document.createElement("p");
    pagesLine.setAttribute("class", "modal-text");
    pagesLine.textContent = 'Pages: ';
    let checkLine = document.createElement("p");
    checkLine.setAttribute("class", "modal-text");
    checkLine.textContent = 'Read: ';

    let details = document.createElement("div");
    details.setAttribute("class", "modal-details");

    details.appendChild(authLine);
    details.appendChild(titleLine);
    details.appendChild(pagesLine);
    details.appendChild(checkLine);

    let btnDiv = document.createElement("div");
    btnDiv.setAttribute("class", "btn-div");

    let markRead = document.createElement("button");
    markRead.setAttribute("class", "marked");
    markRead.textContent = 'Read';
    btnDiv.appendChild(markRead);

    let remove = document.createElement("button");
    remove.setAttribute("class", "remove");
    remove.textContent = 'Remove';
    btnDiv.appendChild(remove);

    card.appendChild(details);
    card.appendChild(btnDiv);

    myLibrary.push(newBook);
};