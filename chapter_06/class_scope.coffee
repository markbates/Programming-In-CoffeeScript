class Employee
  
  constructor: (name)->
    @name = name
  
  dob: (year = 1976, month = 7, day = 24)->
    new Date(year, month, day)

emp1 = new Employee("Mark")
console.log emp1.name
console.log emp1.dob()

emp2 = new Employee("Rachel")
console.log emp2.name
console.log emp2.dob(1979, 3, 28)
