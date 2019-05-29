(function () {

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

    LibraryModel.prototype.showFree = function() {
        return this.books.filter(item => item.cost === 0);
    };

    LibraryModel.prototype.showPopular = function() {
        return this.books.filter(item => item.rating === 5);
    };
    
    LibraryModel.prototype.showRecent = function() {
        return this.books.sort((a, b) => a.createdAt > b.updatedAt);
    };

    LibraryModel.prototype.filteringBook = function() {
        switch (this.currentFilter) {
            case 'recent': {
                return this.showRecent();
            }
            case 'popular': {
                return this.showPopular();
            }
            case 'free': {
                return this.showFree();
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
            if (book.categories.includes(titleCategory)) return true;
    
            return false;
        });
    };

    LibraryModel.prototype.setCurrentFilter = function(titleFilter) {
        this.currentFilter = titleFilter;
    };

    window.app = window.app || {};
	window.app.LibraryModel = LibraryModel;

}());