describe "Calculator", ->
  
  describe "#add", ->
    
    it "adds two numbers", ->
      calculator = new Calculator()
      expect(calculator.add(1, 1)).toEqual 2
    
  describe "#substract", ->
    
    it "subtractors two numbers", ->
      calculator = new Calculator()
      expect(calculator.subtract(10, 1)).toEqual 9
    
  describe "#multiply", ->
    
    it "multiplies two numbers", ->
      calculator = new Calculator()
      expect(calculator.multiply(5, 4)).toEqual 20
    
  describe "#divide", ->
    
    it "divides to numbers", ->
      calculator = new Calculator()
      expect(calculator.divide(20, 5)).toEqual 4
    