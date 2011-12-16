describe "Calculator", ->

  beforeEach ->
    @calculator = new Calculator()
    
  it "is not in scientific mode be default", ->
    expect(@calculator.scientific).toBeFalsy()
    
  describe "#add", ->
    
    it "adds two numbers", ->
      expect(@calculator.add(1, 1)).toEqual 2
    
  describe "#subtract", ->
    
    it "subtracts two numbers", ->
      expect(@calculator.subtract(10, 1)).toEqual 9
    
  describe "#multiply", ->
    
    it "multiplies two numbers", ->
      expect(@calculator.multiply(5, 4)).toEqual 20
    
  describe "#divide", ->
    
    it "divides to numbers", ->
      expect(@calculator.divide(20, 5)).toEqual 4
    