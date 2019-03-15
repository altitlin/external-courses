function isPropertyGivefName(str, obj) {
    var newObj = obj;

    for (var key in newObj) {
        if (key !== str) {
            newObj[str] = 'new';
        }
    }

    return newObj;
}

module.exports = isPropertyGivefName