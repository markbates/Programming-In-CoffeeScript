(function() {
  var sayHi;

  sayHi = function(name) {
    if (name == null) name = 'World';
    return console.log("Hello, " + name);
  };

  sayHi('Mark');

}).call(this);
