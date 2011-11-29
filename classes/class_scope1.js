(function() {
  var Employee, emp1, emp2;

  Employee = (function() {

    function Employee(name) {
      this.name = name;
    }

    Employee.prototype.dob = function(year, month, day) {
      if (year == null) year = 1976;
      if (month == null) month = 7;
      if (day == null) day = 24;
      return new Date(year, month, day);
    };

    return Employee;

  })();

  emp1 = new Employee("Mark");

  console.log(emp1.name);

  console.log(emp1.dob());

  emp2 = new Employee("Rachel");

  console.log(emp2.name);

  console.log(emp2.dob(1979, 3, 28));

}).call(this);
