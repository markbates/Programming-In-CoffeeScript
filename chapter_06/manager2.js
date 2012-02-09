(function() {
  var Employee, Manager, employee, manager,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Employee = (function() {

    function Employee(attributes) {
      this.attributes = attributes;
    }

    Employee.prototype.printInfo = function() {
      console.log("Name: " + this.attributes.name);
      console.log("DOB: " + this.attributes.dob);
      console.log("Salary: " + this.attributes.salary);
      return console.log("Bonus: " + (this.bonus()));
    };

    Employee.prototype.bonus = function() {
      return 0;
    };

    return Employee;

  })();

  Manager = (function(_super) {

    __extends(Manager, _super);

    function Manager() {
      Manager.__super__.constructor.apply(this, arguments);
    }

    Manager.prototype.bonus = function() {
      return this.attributes.salary * .10;
    };

    return Manager;

  })(Employee);

  employee = new Employee({
    name: "Mark",
    dob: new Date(1976, 7, 24),
    salary: 50000
  });

  employee.printInfo();

  manager = new Manager({
    name: "Rachel",
    dob: new Date(1979, 3, 28),
    salary: 100000
  });

  manager.printInfo();

}).call(this);
