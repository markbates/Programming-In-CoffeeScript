class Employee
  
  constructor: (@attributes)->
    
  printInfo: ->
    console.log "Name: #{@attributes.name}"
    console.log "DOB: #{@attributes.dob}"
    if @attributes.salary
      console.log "Salary: #{@attributes.salary}"
    else
      console.log "Salary: Unknown"

emp1 = new Employee 
  name: "Mark"
  dob: new Date(1976, 7, 24)
  salary: "$1.00"
  
emp1.printInfo()

emp2 = new Employee 
  name: "Rachel"
  dob: new Date(1979, 3, 28)
  
emp2.printInfo()
