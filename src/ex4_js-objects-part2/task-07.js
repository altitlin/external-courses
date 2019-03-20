function truncate(str, maxlenght) {
    if (str.length > maxlenght) {
        return str.slice(0, maxlenght - 1) + '…';
    }

    return str;
}

module.exports = truncate