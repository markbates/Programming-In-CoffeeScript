(function() {
  var Employee, emp1, emp2;

  Employee = (function() {

    function Employee() {}

    return Employee;

  })();

  emp1 = new Employee();

  emp2 = new Employee();

}).call(this);
