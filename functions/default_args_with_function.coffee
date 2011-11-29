defaultRate = -> 0.05

calculateTotal = (sub_total, rate = defaultRate()) ->
  tax = sub_total * rate
  sub_total + tax
  
console.log calculateTotal 100, 0.0625
console.log calculateTotal 100