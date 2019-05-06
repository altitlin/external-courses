window.onload = function() {
    var booksArray = loadBooks();

    var section = document.querySelector('section');
    booksArray.forEach(function(item) {
        var itemBook = createBook(item);
        section.appendChild(itemBook);
    });
};

function loadBooks() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://rsu-library-api.herokuapp.com/books', false);
    xhr.send();

    return JSON.parse(xhr.responseText);
}

function createBook(item) {
    var article = document.createElement('article');
    var figure = document.createElement('figure');
    var img = document.createElement('img');
    var figcaption = document.createElement('figcaption');
    var span = document.createElement('span');
    var div = document.createElement('div');
    div.className = 'rating';

    img.src = item.image_url;
    img.alt = item.title;
    figcaption.textContent = item.title;
    span.textContent = 'by ' + item.author.firstName + ' ' + item.author.lastName;

    article.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    article.appendChild(span);
    article.appendChild(div);

    var rating = item.rating;

    for (let j = 0; j < rating; j++) {
        var star = document.createElement('i');
        star.className = 'fas fa-star';
        div.appendChild(star);            
    }

    return article;
}