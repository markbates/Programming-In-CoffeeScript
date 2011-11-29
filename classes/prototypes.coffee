myArray = [1..10]

try
  console.log myArray.size()
catch error
  console.log error

Array::size = -> @length
console.log myArray.size()

myArray.push(11)
console.log myArray.size()