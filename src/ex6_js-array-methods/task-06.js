var reduce = function(arr, callback, startValue) {
    var result;
    var i;

    if (typeof startValue === 'undefined') {
      result = arr[0];
      i = 1;
    } else {
      result = startValue;
      i = 0;
    }

    for (i; i < arr.length; i++) {
      result = callback.call(null, result, arr[i], i, arr);
    }

    return result;
  };

  module.exports = reduce