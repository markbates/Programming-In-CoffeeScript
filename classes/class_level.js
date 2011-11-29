(function() {
  var Employee;

  Employee = (function() {

    function Employee() {
      Employee.hire(this);
    }

    Employee.hire = function(employee) {
      this.allEmployees || (this.allEmployees = []);
      return this.allEmployees.push(employee);
    };

    Employee.total = function() {
      console.log("There are " + this.allEmployees.length + " employees.");
      return this.allEmployees.length;
    };

    return Employee;

  })();

  new Employee();

  new Employee();

  new Employee();

  Employee.total();

}).call(this);
