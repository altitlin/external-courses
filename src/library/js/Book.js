function Books(objBook) {
    var sectionBook = createBook(objBook);

    this.getSectionBook = function() {
        return sectionBook;
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

        div.appendChild(setRating(item.rating));
            
        return article;
    }

    function setRating(objRating) {
        var rating = objRating;
        var ratingContainer = document.createElement('div');

        for (let j = 5; j > 0; j--) {
            var star = document.createElement('i');
            star.innerHTML = '☆';

            if (rating) {
                star.className = 'star';
                star.style.order = '1';
                rating--;
            } 

            ratingContainer.appendChild(star);
        }
        
        return ratingContainer;
    }   
}

Books.prototype = Object.create(Object.prototype);
Books.prototype.constructor = Books;