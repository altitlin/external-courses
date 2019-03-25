function createObjWithoutPrototype() {
    var obj = Object.create(null);
    return obj;
}

module.exports = createObjWithoutPrototype