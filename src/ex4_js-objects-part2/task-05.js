function searchSubString(str, substr) {
    var temp = str.indexOf(substr);

    if (temp === -1) return false;

    return true;
}

module.exports = searchSubString