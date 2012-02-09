(function() {
  var Employee, emp1, emp2;

  Employee = (function() {

    function Employee(name, dob) {
      this.name = name;
      this.dob = dob;
    }

    Employee.prototype.printInfo = function() {
      console.log("Name: " + this.name);
      return console.log("DOB: " + this.dob);
    };

    return Employee;

  })();

  emp1 = new Employee("Mark", new Date(1976, 7, 24));

  emp1.printInfo();

  emp2 = new Employee("Rachel", new Date(1979, 3, 28));

  emp2.printInfo();

}).call(this);
