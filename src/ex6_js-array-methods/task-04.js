var filter = function(arr, callback, thisArg) {
    var results = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback.call(thisArg, arr[i], i, arr)) {
            results.push(arr[i]);
        }
    }

    return results;
};

module.exports = filter