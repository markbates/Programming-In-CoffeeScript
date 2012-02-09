(function() {
  var Employee, emp1, emp2;

  Employee = (function() {

    function Employee(attributes) {
      this.attributes = attributes;
    }

    Employee.prototype.printInfo = function() {
      console.log("Name: " + this.attributes.name);
      console.log("DOB: " + this.attributes.dob);
      if (this.attributes.salary) {
        return console.log("Salary: " + this.attributes.salary);
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
    dob: new Date(1979, 3, 28)
  });

  emp2.printInfo();

}).call(this);
