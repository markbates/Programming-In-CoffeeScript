class Employee
  
  constructor: ->
    console.log "Instantiated a new Employee object"
  
  dob: (year = 1976, month = 7, day = 24)->
    new Date(year, month, day)

emp1 = new Employee()
console.log emp1.dob()

emp2 = new Employee()
console.log emp2.dob(1979, 3, 28)