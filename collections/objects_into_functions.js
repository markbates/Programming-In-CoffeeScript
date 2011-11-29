(function() {
  var myFunc;

  myFunc = function(options) {
    return console.log(options);
  };

  myFunc({
    foo: 'Foo',
    bar: 'Bar'
  });

}).call(this);
