var requestURL = 'https://rsu-library-api.herokuapp.com/books';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var books = request.response;  
    showBooks(books);
}

function showBooks(jsonObj) {
    var section = document.querySelector('section');

    for (let i = 0; i < jsonObj.length; i++) {
        var article = document.createElement('article');
        var figure = document.createElement('figure');
        var img = document.createElement('img');
        var figcaption = document.createElement('figcaption');
        var span = document.createElement('span');
        var div = document.createElement('div');
        div.className = 'rating';

        img.src = jsonObj[i].image_url;
        img.alt = jsonObj[i].title;
        figcaption.textContent = jsonObj[i].title;
        span.textContent = 'by ' + jsonObj[i].author.firstName + ' ' + jsonObj[i].author.lastName;

        article.appendChild(figure);
        figure.appendChild(img);
        figure.appendChild(figcaption);
        article.appendChild(span);
        article.appendChild(div);

        var rating = jsonObj[i].rating;

        for (let j = 0; j < rating; j++) {
            var star = document.createElement('i');
            star.className = 'fas fa-star';
            div.appendChild(star);            
        }

        section.appendChild(article);
    }
}