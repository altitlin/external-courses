function camelize(str) {
    var newStr = str.toLowerCase();
    var array = newStr.split(' ');

    for (var i = 1; i < array.length; i++) {
        array[i].toLowerCase();
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }

    return array.join('');
}

module.exports = camelize