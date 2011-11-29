(function() {
  var object;

  object = {
    name: 'mark',
    sayHi: function() {
      return console.log("Hello: " + this.name);
    }
  };

  object.sayHi();

  console.log(this.name);

}).call(this);
