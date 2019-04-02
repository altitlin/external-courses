var some = function(arr, callback, thisArg) {
    var i, length = arr.length;

    for (i = 0; i < length; i = i + 1) {
        if (callback.call(thisArg, arr[i], i, arr)) {
            return true;
        }
    }

    return false;
};

module.exports = some