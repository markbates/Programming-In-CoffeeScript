(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.Calculator = (function() {

    function Calculator() {
      this.numberClicked = __bind(this.numberClicked, this);
      this.clear = __bind(this.clear, this);
      this.invertSign = __bind(this.invertSign, this);
      this.functionClicked = __bind(this.functionClicked, this);
      this.calculateValue = __bind(this.calculateValue, this);      this.buffer = "";
      this.lastFunction = "";
      this.display = $('input');
      this.clear();
      $('button.primary').click(this.numberClicked);
      $('#c').click(this.clear);
      $('#inv').click(this.invertSign);
      $('.func').click(this.functionClicked);
      $('#eql').click(this.calculateValue);
    }

    Calculator.prototype.calculateValue = function(e) {
      var value;
      if (e != null) e.preventDefault();
      value = (function() {
        switch (this.lastFunction) {
          case "*":
            return parseFloat(this.buffer) * parseFloat(this.getDisplay());
          case "/":
            return parseFloat(this.buffer) / parseFloat(this.getDisplay());
          case "-":
            return parseFloat(this.buffer) - parseFloat(this.getDisplay());
          case "+":
            return parseFloat(this.buffer) + parseFloat(this.getDisplay());
        }
      }).call(this);
      this.lastFunction = "";
      this.buffer = this.getDisplay();
      return this.setDisplay(value);
    };

    Calculator.prototype.functionClicked = function(e) {
      if ((this.buffer != null) && this.buffer !== "") {
        this.calculateValue();
      } else {
        this.buffer = this.getDisplay();
        this.setDisplay("");
      }
      return this.lastFunction = $(e.target).text();
    };

    Calculator.prototype.invertSign = function(e) {
      e.preventDefault();
      if (/^-/.test(this.getDisplay())) {
        return this.setDisplay(this.getDisplay().replace('-', ''));
      } else {
        return this.setDisplay("-" + (this.getDisplay()));
      }
    };

    Calculator.prototype.clear = function(e) {
      if (e != null) e.preventDefault();
      this.setDisplay("");
      return this.lastFunction = "";
    };

    Calculator.prototype.numberClicked = function(e) {
      var val;
      e.preventDefault();
      val = $(e.target).text();
      if (val === ".") if (/\./.test(this.getDisplay())) return;
      return this.setDisplay("" + (this.getDisplay()) + val);
    };

    Calculator.prototype.setDisplay = function(val) {
      return this.display.val(val);
    };

    Calculator.prototype.getDisplay = function(val) {
      return this.display.val();
    };

    return Calculator;

  })();

}).call(this);
