calculateTotal = (sub_total, rate = 0.05) ->
  tax = sub_total * rate
  sub_total + tax
  
console.log calculateTotal 100, 0.0625
console.log calculateTotal 100