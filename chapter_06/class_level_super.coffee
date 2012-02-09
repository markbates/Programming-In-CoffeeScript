class Employee
  
  constructor: ->
    Employee.hire(@)
    
  @hire: (employee) ->
    @allEmployees ||= []
    @allEmployees.push employee
    
  @total: ->
    console.log "There are #{@allEmployees.length} employees."
    @allEmployees.length
    
class Manager extends Employee
  
  @total: ->
    console.log "There are 0 managers."
    super
    
new Employee()
new Employee()
new Employee()

Manager.total()