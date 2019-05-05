function insertSubstrAfterNumberWorld(str, substr, number) {
    var newStr = str.split(' ');
    newStr.splice(newStr.length - number, 0, substr);
    return newStr.join(' ');
}

module.exports = insertSubstrAfterNumberWorld