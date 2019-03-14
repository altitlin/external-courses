function isElementsEquals(arr) {
    var result = true;

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] !== arr[j]) {
                result = false;
            }
        }
    }

    return result;
}

module.exports = isElementsEquals