var every = function(arr, callback, thisArg) {
    for (var i = 0; i < arr.length; i++) {
        if (!callback.call(thisArg, arr[i], i, arr)) {
            return false;
        }
    }

    return true;
};

module.exports = every