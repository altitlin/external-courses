function searchSubString(str, substr) {
    if (str.indexOf(substr) === -1) return false;

    return true;
}

module.exports = searchSubString