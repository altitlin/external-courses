function Book(objBook) {
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

        for (let i = 0; i < 5; i++) {
            var star = document.createElement('i');
            star.className = 'fa-star';

            if (rating) {
                star.classList.add('fa');
                star.classList.add('paint');
                rating--;
            } else {
                star.classList.add('far');
            }

            ratingContainer.appendChild(star);
            ratingContainer.addEventListener('click', onClickRating);
        }
        
        return ratingContainer;
    }   

    function onClickRating(event) {
        var target = event.target;

        if (target.tagName !== 'I') return;

        switch (target.className) {
            case 'fa-star far':
            case 'fa-star far paint': {
                paintOver(target);
                break;
            }

            case 'fa-star fa':
            case 'fa-star fa paint': {
                unPaintOver(target);
                break;
            }
        }
    }

    function paintOver(target) {
        target.parentNode.childNodes.forEach(elem => {
            elem.classList.remove('paint');
        });

        target.classList.add('paint');
    }

    function unPaintOver(target) {
        target.parentNode.childNodes.forEach(elem => {
			elem.classList.remove('paint');
            elem.classList.remove('fa');
            elem.classList.add('far');
        });
    }
}

Book.prototype = Object.create(Object.prototype);
Book.prototype.constructor = Book;