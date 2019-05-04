function SimpleCalculator(name) {
    Calculator.apply(this, arguments);
}

SimpleCalculator.prototype = Object.create(Calculator.prototype);
SimpleCalculator.prototype.constructor = SimpleCalculator;

SimpleCalculator.prototype.add = function(value) {
    if (this.__isNumeric(value)) {
        this.__currentState += value;
    }

    return this;
}; 

SimpleCalculator.prototype.subtract = function(value) {
    if (this.__isNumeric(value)) {
        this.__currentState -= value;
    }

    return this;
}; 

SimpleCalculator.prototype.multiply = function(value) {
    if (this.__isNumeric(value)) {
        this.__currentState *= value;
    }

    return this;
}; 

SimpleCalculator.prototype.divide = function(value) {
    if (this.__isNumeric(value)) {
        this.__currentState /= value;
    }

    return this;
}; 

SimpleCalculator.prototype.sqrt = function(value) {
    if(this.__isNumeric(value)) {
        this.__currentState = Math.sqrt(value);
    }

    return this;
};

SimpleCalculator.prototype.raiseInSquare = function(value) {
    if(this.__isNumeric(value)) {
        this.__currentState = Math.pow(value, 2);
    }

    return this;
};


var simpleCal = new SimpleCalculator("Простой калькулятор");

var res = simpleCal.add(100)
    .multiply(2)
    .divide(20)
    .reset()
    .subtract(1)
    .getResult();
	
console.log(res);

simpleCal.setState(1);
console.log(simpleCal.getResult()); 

console.log(simpleCal.sqrt(5));
console.log(simpleCal.getResult());

console.log(simpleCal.raiseInSquare(5));
console.log(simpleCal.getResult());