
  this.Calculator = (function() {

    function Calculator(scientific) {
      this.scientific = scientific != null ? scientific : false;
    }

    Calculator.prototype.add = function(a, b) {
      return a + b;
    };

    Calculator.prototype.subtract = function(a, b) {
      return a - b;
    };

    Calculator.prototype.multiply = function(a, b) {
      return a * b;
    };

    Calculator.prototype.divide = function(a, b) {
      return a / b;
    };

    return Calculator;

  })();
