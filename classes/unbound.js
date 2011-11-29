(function() {
  var User, bob, log, mary;

  User = (function() {

    function User(name) {
      this.name = name;
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
