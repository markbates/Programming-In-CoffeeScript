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

    Employee.prototype.printInfo = function(year, month, day) {
      if (year == null) year = 1976;
      if (month == null) month = 7;
      if (day == null) day = 24;
      console.log("Name: " + this.name);
      return console.log("DOB: " + (this.dob(year, month, day)));
    };

    return Employee;

  })();

  emp1 = new Employee("Mark");

  emp1.printInfo(1976, 7, 24);

  emp2 = new Employee("Rachel");

  emp2.printInfo(1979, 3, 28);

}).call(this);
