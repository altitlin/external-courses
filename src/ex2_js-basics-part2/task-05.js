function getMaxElement(arr) {
    var max = arr[1];

    for ( var i = 0; i < arr.length; i++ ) {
        if ( max < arr[i] ) {
            max = arr[i];
		}
    }

    return max;
}

module.exports = getMaxElement