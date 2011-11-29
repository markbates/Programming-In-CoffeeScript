calculateTotal = (sub_total, rate) ->
  tax = sub_total * rate
  sub_total + tax
  
console.log calculateTotal(100, 0.0625)