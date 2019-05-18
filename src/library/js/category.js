var categoryContainer = document.querySelector('.categories');

categoryContainer.addEventListener('click', onClickCategory);

function onClickCategory(event) {
    var target = event.target;

    if (target.tagName !== 'A') return;

    var titleCategory = target.getAttribute('data-category');
    booksByCategory(titleCategory);
}

function booksByCategory(titleCategory) {
    var result = booksArray.filter(function(book) {
        for (let i = 0; i < book.categories.length; i++) {
            if (titleCategory === book.categories[i]) {
                return true;
            }
        }

        return false;
    });

    showBooksByCategory(result);
}

function showBooksByCategory(arrayBooks) {
    var section = document.querySelector('section');

    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    arrayBooks.forEach(function(item) {
        var itemBook = new Book(item);
        section.appendChild(itemBook.getSectionBook());
    });
}