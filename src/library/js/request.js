var booksArray = loadBooks();

window.onload = function() {
    var booksArray = loadBooks();

    var section = document.querySelector('section');
    booksArray.forEach(function(item) {
        var itemBook = new Book(item);
        section.appendChild(itemBook.getSectionBook());
    });
};

function loadBooks() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://rsu-library-api.herokuapp.com/books', false);
    xhr.send();

    return JSON.parse(xhr.responseText);
}