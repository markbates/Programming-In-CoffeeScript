class Employee
  
  constructor: ->
    Employee.hire(@)
    
  @hire: (employee) ->
    @allEmployees ||= []
    @allEmployees.push employee
    
  @total: ->
    console.log "There are #{@allEmployees.length} employees."
    @allEmployees.length
    
new Employee()
new Employee()
new Employee()

Employee.total()