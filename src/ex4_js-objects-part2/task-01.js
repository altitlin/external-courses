var obj = Object.create();

function isPropertyInPrototype(property, obj) {
    for (var key in obj) {
        if (key === property) {
            if (!obj.hasOwnPropery(key)) continue;
            return obj[property];
        }
    }

    return undefined;
}

module.exports = isPropertyInPrototype