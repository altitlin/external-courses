function AccountCalculator(name) {
    Calculator.apply(this, arguments);
}

AccountCalculator.prototype = Object.create(Calculator.prototype);
AccountCalculator.prototype.constructor = AccountCalculator;

AccountCalculator.prototype.round = function(value) {
    if (this.__isNumeric(value)) {
        this.__currentState = +value.toFixed(3);
    }

    return this;
};


var accountCal = new AccountCalculator("Бухгалтерский калькулятор");

accountCal.round(12.45672);
console.log(accountCal.getResult());