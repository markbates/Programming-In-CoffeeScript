class Employee
  
  constructor: (@name)->
  
  dob: (year = 1976, month = 7, day = 24)->
    new Date(year, month, day)
    
  printInfo: (year = 1976, month = 7, day = 24)->
    console.log "Name: #{@name}"
    console.log "DOB: #{@dob(year, month, day)}"
    

emp1 = new Employee("Mark")
emp1.printInfo(1976, 7, 24)

emp2 = new Employee("Rachel")
emp2.printInfo(1979, 3, 28)
