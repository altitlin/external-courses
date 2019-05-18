function searchBook(search) {
    var result = booksArray.filter(function(book) {
        return (
            book.title.toLowerCase().indexOf(search) !== -1 ||
            book.author.firstName.toLowerCase().indexOf(search) !== -1 ||
            book.author.lastName.toLowerCase().indexOf(search) !== -1
        );   
    });

    showBooksBySearch(result);
}

function debounce(func, delay) {
    var timeout = null;    

    return function(event) {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            func.call(null, event);
        }, delay);
    };
};

function handleOnChangeInput(event) {
    var searchInput = event.target.value;
    
    searchBook(searchInput.toLowerCase());
}

function showBooksBySearch(arrayBooks) {
    var section = document.querySelector('section');

    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    arrayBooks.forEach(function(item) {
        var itemBook = new Book(item);
        section.appendChild(itemBook.getSectionBook());
    });
}

var debounceInputSearch = debounce(handleOnChangeInput, 300);

var inputSearch = document.querySelector('[name="search"]');
inputSearch.addEventListener('keyup', debounceInputSearch);