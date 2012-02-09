(function() {
  var Employee, Manager,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

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

  Manager = (function(_super) {

    __extends(Manager, _super);

    function Manager() {
      Manager.__super__.constructor.apply(this, arguments);
    }

    Manager.total = function() {
      console.log("There are 0 managers.");
      return Manager.__super__.constructor.total.apply(this, arguments);
    };

    return Manager;

  })(Employee);

  new Employee();

  new Employee();

  new Employee();

  Manager.total();

}).call(this);
