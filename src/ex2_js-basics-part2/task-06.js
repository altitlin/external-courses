function simpleOrComposite(value) {
    var str = 'Число ' + value + ' - простое число';

    if ( value > 1000 ) return 'Данные неверны';
    if ( value === 0 ) return 'введен нуль';
   
    for ( var i = 2; i < value; i++ ) {
        if ( value % i === 0) {
            str = 'Число ' + value + ' - составное число';
            break;
        }
    }

    return str;
}

module.exports = simpleOrComposite