class Employee
  
  constructor: (@attributes)->
    
  printInfo: ->
    console.log "Name: #{@attributes.name}"
    console.log "DOB: #{@attributes.dob}"
    console.log "Salary: #{@attributes.salary}"
      
class Manager extends Employee
  
employee = new Employee 
  name: "Mark"
  dob: new Date(1976, 7, 24)
  salary: 50000

employee.printInfo()

manager = new Manager 
  name: "Rachel"
  dob: new Date(1979, 3, 28)
  salary: 100000

manager.printInfo()