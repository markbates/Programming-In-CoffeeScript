describe "Calculator", ->

  beforeEach ->
    @calculator = new Calculator()
    
  describe "#add", ->
    
    it "adds two numbers", ->
      expect(@calculator.add(1, 1)).toEqual 2
    
  describe "#substract", ->
    
    it "subtractors two numbers", ->
      expect(@calculator.subtract(10, 1)).toEqual 9
    
  describe "#multiply", ->
    
    it "multiplies two numbers", ->
      expect(@calculator.multiply(5, 4)).toEqual 20
    
  describe "#divide", ->
    
    it "divides to numbers", ->
      expect(@calculator.divide(20, 5)).toEqual 4
    