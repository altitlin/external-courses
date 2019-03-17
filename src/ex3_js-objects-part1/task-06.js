function toDeepCloneObject(obj) {
    if(typeof obj !== "object") {
        return obj;
    }
    
    if(!obj) {
        return obj; // null
    }
    
    var clone = (obj instanceof Array) ? [] : {};
    for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
            clone[key] = toDeepCloneObject(obj[key]);
        }
    }
    return clone;
}

module.exports = toDeepCloneObject