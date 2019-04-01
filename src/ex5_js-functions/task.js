var calculator = {
    currentState: 0,

    getResult: function() {
        return calculator.currentState;
    },

    reset: function() {
        calculator.currentState = 0;
    },

    add: function(value) {
        if (typeof value !== 'undefined') {
            calculator.currentState += value;
        }

        return this.add;
    },
    
    subtract: function(value) {
        if (typeof value !== 'undefined') {
            calculator.currentState -= value;
        }
        
        return this.subtract;
    },
    
    divide: function(value) {
        if (typeof value !== 'undefined') {
            calculator.currentState /= value;
        }

        return this.divide;
    },
    
    multiply: function(value) {
        if (typeof value !== 'undefined') {
            calculator.currentState *= value;
        }

        return this.multiply;
    }
};

module.exports = calculator