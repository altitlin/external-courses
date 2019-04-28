function Calc() {
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    this.currentState = 0;

    this.add = function(value) {
        if (isNumeric(value)) {
            this.currentState += value;
        }

        return this;
    };

    this.subtract = function(value) {
        if(isNumeric(value)) {
            this.currentState -= value;
        }

        return this;
    };

    this.multiply = function(value) {
        if(isNumeric(value)) {
            this.currentState *= value;
        }

        return this;
    };

    this.divide = function(value) { 
        if(isNumeric(value)) {
            this.currentState /= value;
        }

        return this;
    };

    this.reset = function() {
        this.currentState = 0;
        return this;
    };

    this.getResult = function() {
        return this.currentState;
    };

    this.setState = function(value) {
        if(isNumeric(value)) {
            this.currentState = value;
        }

        return this;
    };

    this.fetchData = function(callback) {
        var cb = callback.bind(this);

        setTimeout(function(){
            var serverState = 500;
            cb(serverState);
        }, 1000);

        return this;
    };
}

var Calculator = new Calс();

module.exports = Calculator;