var Calc = function(){
    this.currentState = 0;

    this.add = function(value) {
        if (typeof value !== 'undefined') {
            this.currentState += value;
        }

        return this;
    }

    this.subtract = function(value) {
        if(typeof value !== 'undefined') {
            this.currentState -= value;
        }

        return this;
    }

    this.multiply = function(value) {
        if(typeof value !== 'undefined') {
            this.currentState *= value;
        }

        return this;
    }

    this.divide = function(value) { 
        if(typeof value !== 'undefined') {
            this.currentState /= value;
        }

        return this;
    }

    this.reset = function() {
        this.currentState = 0;
        return this;
    }

    this.getResult = function() {
        return this.currentState;
    }

    this.setState = function(value) {
        if(typeof value !== 'undefined') {
            this.currentState = value;
        }

        return this;
    }

    this.fetchData = function(callback) {
        var cb = callback.bind(this);

        setTimeout(function(){
            var serverState = 500;
            cb(serverState);
        }, 1000);

        return this;
    }
}

var Calculator = new Calс();

module.exports = Calculator;