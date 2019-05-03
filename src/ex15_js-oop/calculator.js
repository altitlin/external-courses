function Calculator(name) {
    this.__currentState = 0;
    this.__name = name;
}

Calculator.prototype.__isNumeric = function(n) {
    return !Number.isNaN(parseFloat(n)) && Number.isFinite(n);
};

Calculator.prototype.reset = function() {
    this.__currentState = 0;
    return this;
};

Calculator.prototype.getResult = function() {
    return this.__currentState;
};

Calculator.prototype.setState = function(value) {
    if(this.__isNumeric(value)) {
        this.__currentState = value;
    }

    return this;
};