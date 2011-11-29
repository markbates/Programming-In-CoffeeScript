myObject = 
  name: "Mark"

for own key, value of myObject
  console.log "#{key}: #{value}"
  
Object.prototype.dob = new Date(1976, 7, 24)

for own key, value of myObject
  console.log "#{key}: #{value}"
  
anotherObject = 
  name: "Bob"

for own key, value of anotherObject
  console.log "#{key}: #{value}"