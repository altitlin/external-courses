function getObjShowKeyAndValue(obj) {
    for (var key in obj) {
        console.log('Ключ объекта: ' + key + ' значение свойства объекта: ' + obj[key]);
    }
}

module.exports = getObjShowKeyAndValue