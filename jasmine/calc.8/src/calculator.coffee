class @Calculator

  constructor: (@scientific = false)->
  
  add: (a, b) ->
    a + b
    
  subtract: (a, b) ->
    a - b
    
  multiply: (a, b) ->
    a * b
    
  divide: (a, b) ->
    a / b