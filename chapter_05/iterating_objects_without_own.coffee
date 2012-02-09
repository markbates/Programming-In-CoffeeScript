myObject = 
  name: "Mark"

for key, value of myObject
  console.log "#{key}: #{value}"
  
Object.prototype.dob = new Date(1976, 7, 24)

for key, value of myObject
  console.log "#{key}: #{value}"
  
anotherObject = 
  name: "Bob"
  
for key, value of anotherObject
  console.log "#{key}: #{value}"