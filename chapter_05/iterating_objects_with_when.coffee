person = 
  firstName: "Mark"
  lastName: "Bates"
  
for key, value of person when value.length < 5
  console.log "#{key} is #{value}"