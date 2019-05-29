const callApi = ((url, cb) => {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.send();

    xhr.onload = function() {
        let books = JSON.parse(xhr.responseText);;
        cb(books);
    };
});