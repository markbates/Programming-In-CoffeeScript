console.log "= Assign:"
x = 10
console.log x

console.log "+= Add and assign:"
x += 25
console.log x

console.log "-= Subtract and assign:"
x -= 25
console.log x

console.log "*= Multiply and assign:"
x *= 10
console.log x

console.log "/= Divide and assign:"
x /= 10
console.log x

console.log "%= Modulus and assign:"
x %= 3
console.log x

console.log "?= Exists or assign:"
y ?= 3
console.log y
y ?= 100
console.log y

console.log "||= Or or assign:"
z = null
z ||= 10
console.log z
z ||= 100
console.log z

console.log "&&= Assign if both are true:"
a = 1
b = 2
console.log a &&= b
console.log a