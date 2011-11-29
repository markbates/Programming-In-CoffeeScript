(function() {
  var Employee, emp1, emp2;

  Employee = (function() {

    function Employee(attributes) {
      var key, value, _ref;
      this.attributes = attributes;
      _ref = this.attributes;
      for (key in _ref) {
        value = _ref[key];
        this[key] = value;
      }
    }

    Employee.prototype.printInfo = function() {
      console.log("Name: " + this.name);
      console.log("DOB: " + this.dob);
      if (this.salary) {
        return console.log("Salary: " + this.salary);
      } else {
        return console.log("Salary: Unknown");
      }
    };

    return Employee;

  })();

  emp1 = new Employee({
    name: "Mark",
    dob: new Date(1976, 7, 24),
    salary: "$1.00"
  });

  emp1.printInfo();

  emp2 = new Employee({
    name: "Rachel",
    dob: new Date(1979, 3, 28),
    printInfo: function() {
      return console.log("I've hacked your code!");
    }
  });

  emp2.printInfo();

}).call(this);
