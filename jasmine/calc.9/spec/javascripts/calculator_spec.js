(function() {

  describe("Calculator", function() {
    beforeEach(function() {
      return this.calculator = new Calculator();
    });
    it("is not in scientific mode be default", function() {
      return expect(this.calculator.scientific).toBeFalsy();
    });
    describe("scientific mode", function() {
      beforeEach(function() {
        return this.calculator = new Calculator(true);
      });
      return it("is in scientific mode when set", function() {
        return expect(this.calculator.scientific).toBeTruthy();
      });
    });
    describe("#add", function() {
      return it("adds two numbers", function() {
        return expect(this.calculator.add(1, 1)).toEqual(2);
      });
    });
    describe("#subtract", function() {
      return it("subtracts two numbers", function() {
        return expect(this.calculator.subtract(10, 1)).toEqual(9);
      });
    });
    describe("#multiply", function() {
      return it("multiplies two numbers", function() {
        return expect(this.calculator.multiply(5, 4)).toEqual(20);
      });
    });
    return describe("#divide", function() {
      return it("divides to numbers", function() {
        return expect(this.calculator.divide(20, 5)).toEqual(4);
      });
    });
  });

}).call(this);
