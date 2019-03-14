function countEvenAndOdd(arr) {
    var even = 0, odd = 0, nulls = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === null) continue; 

        if (arr[i] === 0) {
            nulls++;
        } else if (arr[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        } 
    }

    return [even, odd, nulls];
}

module.exports = countEvenAndOdd