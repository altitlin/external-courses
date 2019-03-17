function toDeepCloneObject(obj) {
    var clone = {};

    for (var key in obj) {
        if (typeof key === 'object') {
            clone[key] = toDeepCloneObject(obj[key]);
        }
    }

    return clone;
}

module.exports = toDeepCloneObject