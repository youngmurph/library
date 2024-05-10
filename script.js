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
});

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
    authLine.textContent = `Author: `;
    let titleLine = document.createElement("p");
    titleLine.setAttribute("class", "modal-text");
    titleLine.textContent = `Title: `;
    let pagesLine = document.createElement("p");
    pagesLine.setAttribute("class", "modal-text");
    pagesLine.textContent = `Pages: `;
    let checkLine = document.createElement("p");
    checkLine.setAttribute("class", "modal-text");
    checkLine.textContent = `Read: `;

    let authSec = document.createElement("p");
    authSec.setAttribute("class", "modal-text");
    authSec.textContent = `${author}`;
    let titleSec = document.createElement("p");
    titleSec.setAttribute("class", "modal-text");
    titleSec.textContent = `${title}`;
    let pagesSec = document.createElement("p");
    pagesSec.setAttribute("class", "modal-text");
    pagesSec.textContent = `${pages}`;

    let checkSec = document.createElement("p");
    checkSec.setAttribute("id", "check-sec");
    
    if (read.checked) {
        checkSec.textContent = 'Yes';
    } else {
        checkSec.textContent = 'No';
    };

    const details = document.createElement("div");
    details.setAttribute("class", "modal-details");

    const right = document.createElement("div");
    right.setAttribute("class", "right");

    const left = document.createElement("div");
    left.setAttribute("class", "left");

    left.appendChild(authLine);
    left.appendChild(titleLine);
    left.appendChild(pagesLine);
    left.appendChild(checkLine);

    right.appendChild(authSec);
    right.appendChild(titleSec);
    right.appendChild(pagesSec);
    right.appendChild(checkSec);

    details.appendChild(left);
    details.appendChild(right);

    let btnDiv = document.createElement("div");
    btnDiv.setAttribute("class", "btn-div");

    const markRead = document.createElement("button");
    markRead.setAttribute("id", "marked");
    markRead.textContent = 'Read';
    btnDiv.appendChild(markRead);

    const remove = document.createElement("button");
    remove.setAttribute("id", "remove");
    remove.textContent = 'Remove';
    btnDiv.appendChild(remove);

    card.appendChild(details);
    card.appendChild(btnDiv);

    myLibrary.push(newBook);

    let check = document.getElementById("check-sec");

    markRead.addEventListener("click", () => {
        check.textContent = 'Yes';
    });

    remove.addEventListener("click", () => {
        myLibrary.splice(-1);
        library.removeChild(library.lastChild);
    });

};

