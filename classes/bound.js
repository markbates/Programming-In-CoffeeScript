(function() {
  var User, bob, log, mary;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  User = (function() {

    function User(name) {
      this.name = name;
      this.sayHi = __bind(this.sayHi, this);
    }

    User.prototype.sayHi = function() {
      return console.log("Hello " + this.name);
    };

    return User;

  })();

  bob = new User('bob');

  mary = new User('mary');

  log = function(callback) {
    console.log("about to execute callback...");
    callback();
    return console.log("...executed callback");
  };

  log(bob.sayHi);

  log(mary.sayHi);

}).call(this);
