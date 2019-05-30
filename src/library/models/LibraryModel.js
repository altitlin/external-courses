(function () {

    'use strict';

    function LibraryModel() {
        this.books = [];
        this.currentFilter = 'all';
    }

    LibraryModel.prototype.getBooks = function() {
        return this.books;
    }; 

    LibraryModel.prototype.addNewBook = function(newBook) {
        this.books.push(newBook);
    };

    LibraryModel.prototype.setBooksArray = function(array) {
        this.books = array;
    };

    LibraryModel.prototype.getFree = function() {
        return this.books.filter(item => item.cost === 0);
    };

    LibraryModel.prototype.getPopular = function() {
        return this.books.filter(item => item.rating === 5);
    };
    
    LibraryModel.prototype.getRecent = function() {
        return this.books.sort((a, b) => a.createdAt > b.updatedAt);
    };

    LibraryModel.prototype.filteringBook = function() {
        switch (this.currentFilter) {
            case 'recent': {
                return this.getRecent();
            }
            case 'popular': {
                return this.getPopular();
            }
            case 'free': {
                return this.getFree();
            }
            default: {
                return this.getBooks();
            }
        }
    };

    LibraryModel.prototype.filteringBookBySearch = function(search) {
        return this.books.filter(item => {
            return (
                item.title.toLowerCase().indexOf(search) !== -1 ||
                item.author.firstName.toLowerCase().indexOf(search) !== -1 ||
                item.author.lastName.toLowerCase().indexOf(search) !== -1
            );   
        });
    };

    LibraryModel.prototype.filterBooksByCategory = function(titleCategory) {
        return this.books.filter(function(book) {
            return book.categories.includes(titleCategory);
        });
    };

    LibraryModel.prototype.setCurrentFilter = function(titleFilter) {
        this.currentFilter = titleFilter;
    };

    window.app = window.app || {};
	window.app.LibraryModel = LibraryModel;

}());