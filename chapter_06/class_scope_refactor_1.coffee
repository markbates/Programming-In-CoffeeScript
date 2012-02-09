class Employee
  
  constructor: (@name, @dob)->
    
  printInfo: ->
    console.log "Name: #{@name}"
    console.log "DOB: #{@dob}"
    

emp1 = new Employee("Mark", new Date(1976, 7, 24))
emp1.printInfo()

emp2 = new Employee("Rachel", new Date(1979, 3, 28))
emp2.printInfo()
