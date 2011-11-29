class Employee
  
  constructor: (@attributes)->
    for key, value of @attributes
      @[key] = value
    
  printInfo: ->
    console.log "Name: #{@name}"
    console.log "DOB: #{@dob}"
    if @salary
      console.log "Salary: #{@salary}"
    else
      console.log "Salary: Unknown"

emp1 = new Employee
  name: "Mark"
  dob: new Date(1976, 7, 24)
  salary: "$1.00"
  
emp1.printInfo()

emp2 = new Employee
  name: "Rachel",
  dob: new Date(1979, 3, 28)
  printInfo: -> 
    console.log "I've hacked your code!"
    
emp2.printInfo()
