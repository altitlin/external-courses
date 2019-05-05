function slice(array, begin, end) {
    var result = [];
    var startPos;
    var endPos;
            
    if (typeof end === 'undefined' || end >= array.length) {
		endPos = array.length;
	} else {
        endPos = end;
    }
	
	if (typeof begin === 'undefined') {
		startPos = 0;
    } else {
        startPos = begin;
    }
    
    if (end < 0) {
		endPos += array.length;
    }
	
	if (begin < 0) {
		startPos += array.length;
    }
	
	for (var i = startPos; i < endPos; i++) {
		result.push(array[i]);
	}
        
    return result;
}

module.exports = slice