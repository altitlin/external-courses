(function () {

    'use strict';

    function LibraryView(libraryController) {
        this.libraryController = libraryController;

        callApi('https://rsu-library-api.herokuapp.com/books', booksArray => {
            this.libraryController.setBooksArray(booksArray);
            this.showBooks(this.libraryController.getBooks());
        });

        this.filterContainer = document.querySelector('.filters');
        this.categoryContainer = document.querySelector('.categories');
        this.inputSearch = document.querySelector('[name="search"]');
        this.addBookButton = document.querySelector('div > [type="submit"]');
        this.button = document.querySelector('[type="submit"]');
        this.modal = document.querySelector('.modal');
        this.form = document.forms.add_book;

        this.__onclickFilter = event => {
            var target = event.target;

            if (target.tagName !== 'A') return;

            var allFilters = target.parentElement.querySelectorAll('a');

            allFilters.forEach(element => {
                if (element.classList.contains('active')) {
                    element.classList.remove('active');
                }
            });

            target.classList.add('active');

            var titleFilter = target.getAttribute('data-filter');
            this.libraryController.setCurrentFilter(titleFilter);
            var filteredBooks = this.libraryController.filteringBook();
            this.showBooks(filteredBooks);
        };
        this.filterContainer.addEventListener('click', this.__onclickFilter);

        this.__onClickCategory = event => {
            var target = event.target;

            if (target.tagName !== 'A') return;

            var titleCategory = target.getAttribute('data-category');
            var booksByCategories = this.libraryController.filterBooksByCategory(titleCategory);
            
            this.showBooks(booksByCategories);
        };
        this.categoryContainer.addEventListener('click', this.__onClickCategory);

        this.__onClickRating = event => {
            var target = event.target;

            if (target.tagName !== 'I') return;

            switch (target.className) {
                case 'fa-star far':
                case 'fa-star far paint': {
                    this.paintOver(target);
                    break;
                }

                case 'fa-star fa':
                case 'fa-star fa paint': {
                    this.unPaintOver(target);
                    break;
                }

                default: 
                    break;
            }
        };

        this.__handleOnChangeInput = event => {
            var searchInput = event.target.value;
            var filteredBooksBySearch = this.libraryController.filteringBookBySearch(searchInput.toLowerCase());

            this.showBooks(filteredBooksBySearch);
            
        };
        this.inputSearch.addEventListener('keyup', debounce(this.__handleOnChangeInput, 300));

        this.__onClickAddBook = () => {
            var validData = 
                this.form.elements.title.value !== '' &&
                this.form.elements.firsname.value !== '' &&
                this.form.elements.lastname.value !== '' &&
                this.form.elements.cost.value >= 0 &&
                this.form.elements.image_url.value !== '';

            var books = this.libraryController.getBooks();
            var book = {};

            book.id = books[books.length - 1].id + 1;
            book.title = this.setFirstCharcterWordUpperCase(this.form.elements.title.value);
            book.author = {
                firstName: this.setFirstCharcterWordUpperCase(this.form.elements.firsname.value),
                lastName: this.setFirstCharcterWordUpperCase(this.form.elements.lastname.value)
            };
            book.rating = 0;
            book.cost = +this.form.elements.cost.value;
            book.categories = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(elem => elem.value);
            book.createdAt = new Date().getTime();
            book.updatedAt = new Date().getTime();
            book.image_url = this.form.elements.image_url.value;

            if (validData) {
                this.libraryController.addNewBook(book);

                var addedBooks = this.libraryController.getBooks();
                this.showBooks(addedBooks);

                this.form.elements.title.value = '';
                this.form.elements.firsname.value = '';
                this.form.elements.lastname.value = '';
                this.form.elements.cost.value = '';
                this.form.elements.image_url.value = '';

                this.__closeModal();
            } 
        };
        this.addBookButton.addEventListener('click', this.__onClickAddBook);


        this.button.addEventListener('click', () => {
            this.modal.classList.remove('hide');
            this.modal.classList.add('show');
        });

        this.__closeModal = () => {
            this.modal.classList.remove('show');
            this.modal.classList.add('hide');
        };
    }

    LibraryView.prototype.setFirstCharcterWordUpperCase = function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    LibraryView.prototype.showBooks = function(booksArray) {
        var section = document.querySelector('section');
        section.innerHTML = '';

        booksArray.forEach(item => {
            var itemBook = this.createBook(item);
            section.appendChild(itemBook);
        });
    };

    LibraryView.prototype.createBook = function(item) {
        var article = document.createElement('article');

        var img = document.createElement('img');
        img.src = item.image_url;
        img.alt = item.title;

        var figcaption = document.createElement('figcaption');
        figcaption.textContent = item.title;

        var figure = document.createElement('figure');
        figure.appendChild(img);
        figure.appendChild(figcaption);
        article.appendChild(figure);

        var span = document.createElement('span');
        span.textContent = 'by ' + item.author.firstName + ' ' + item.author.lastName;
        article.appendChild(span);

        var div = document.createElement('div');
        div.className = 'rating';
        div.appendChild(this.setRating(item.rating));   
        article.appendChild(div);

        return article;
    };

    LibraryView.prototype.setRating = function(objRating) {
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
            ratingContainer.addEventListener('click', this.__onClickRating);
        }
        
        return ratingContainer;
    };

    LibraryView.prototype.paintOver = function(target) {
        target.parentNode.childNodes.forEach(elem => elem.classList.remove('paint'));
    
        target.classList.add('paint');
    };
    
    LibraryView.prototype.unPaintOver = function(target) {
        target.parentNode.childNodes.forEach(elem => {
            elem.classList.remove('paint');
            elem.classList.remove('fa');
            elem.classList.add('far');
        });
    };
 
    window.app = window.app || {};
    window.app.LibraryView = LibraryView;
    
}());