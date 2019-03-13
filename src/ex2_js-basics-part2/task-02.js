function showArray(arr) {
    var count = 0;

    for ( var i = 0; i < arr.length; i++ ) {
        console.log(arr[i] + " ");
        count++;
    }

    console.log("Количество элементов в массиве " + count);
}

module.exports = showArray