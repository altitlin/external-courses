(function () {

    function LibraryController(libraryModel) {
        this.libraryModel = libraryModel;
    }

    LibraryController.prototype.addNewBook = function(newBook) {
        this.libraryModel.addNewBook(newBook);
    };

    LibraryController.prototype.getBooks = function() {
        return this.libraryModel.getBooks();
    };

    LibraryController.prototype.setBooksArray = function(array) {
        this.libraryModel.setBooksArray(array);
    };

    LibraryController.prototype.setCurrentFilter = function(titleFilter) {
        this.libraryModel.setCurrentFilter(titleFilter);
    };

    LibraryController.prototype.filteringBook = function() {
        return this.libraryModel.filteringBook();
    };

    LibraryController.prototype.filteringBookBySearch = function(search) {
        return this.libraryModel.filteringBookBySearch(search);
    };

    LibraryController.prototype.filterBooksByCategory = function(titleCategory) {
        return this.libraryModel.filterBooksByCategory(titleCategory);
    };

    window.app = window.app || {};
	window.app.LibraryController = LibraryController;

}());