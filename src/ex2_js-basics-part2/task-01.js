function numberOrString(value) {
    var varible;
    var typeVarible = typeof value;
    if (typeVarible === 'string' || typeVarible === 'number') {
        return typeVarible;
    }
    
	return varible;
}

module.exports = numberOrString