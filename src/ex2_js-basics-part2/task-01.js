function numberOrString(value) {
    var typeVarible = typeof value;
	
	if (isNaN(value)) return undefined;

    if (typeof value === 'string' || typeof value === 'number') {
        return typeVarible;
    }  
	
	return value;

}

module.exports = numberOrString