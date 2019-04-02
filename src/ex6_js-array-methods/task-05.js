var map = function(arr, callback, thisArg) {
    var results = [];

    for (var i = 0; i < arr.length; i++) {
        results.push(callback.call(thisArg, arr[i], i, arr));
    }

    return results;
};

module.exports = map