(function() {

  describe("Calculator", function() {
    describe("#add", function() {
      return it("adds two numbers", function() {
        var calculator;
        calculator = new Calculator();
        return expect(calculator.add(1, 1)).toEqual(2);
      });
    });
    describe("#subtract", function() {
      return it("subtracts two numbers", function() {
        var calculator;
        calculator = new Calculator();
        return expect(calculator.subtract(10, 1)).toEqual(9);
      });
    });
    describe("#multiply", function() {
      return it("multiplies two numbers", function() {
        var calculator;
        calculator = new Calculator();
        return expect(calculator.multiply(5, 4)).toEqual(20);
      });
    });
    return describe("#divide", function() {
      return it("divides to numbers", function() {
        var calculator;
        calculator = new Calculator();
        return expect(calculator.divide(20, 5)).toEqual(4);
      });
    });
  });

}).call(this);
