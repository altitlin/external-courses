(function() {
    function App() {
        this.libraryModel = new app.LibraryModel();
        this.libraryController = new app.LibraryController(this.libraryModel);
        this.libraryView = new app.LibraryView(this.libraryController);
    }

    new App();
}());