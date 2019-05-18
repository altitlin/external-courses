var filterContainer = document.querySelector('.filters');

filterContainer.addEventListener('click', onclickFilter);

function onclickFilter(event) {
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
    filteringBook(titleFilter);
}

function filteringBook(titleFilter) {
    var result = booksArray.filter(function(book) {
        switch (titleFilter) {
            case 'popular': {
                if (book.rating === 5) return true;
                break;
            }

            case 'free': {
                if (book.cost === 0) return true;
                break;
            }

            default: 
                return true
        }

        return false;
    });

    if (titleFilter === 'recent') {
        result.sort(function(a, b) {
            return a.createdAt > b.updatedAt;
        });
    }

    showBooksByFilter(result);
}

function showBooksByFilter(arrayBooks) {
    var section = document.querySelector('section');

    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    arrayBooks.forEach(function(item) {
        var itemBook = new Book(item);
        section.appendChild(itemBook.getSectionBook());
    });
}