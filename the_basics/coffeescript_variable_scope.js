(function() {
  var a, myFunc;

  a = 'A';

  myFunc = function() {
    var b;
    a = 'AAA';
    return b = 'B';
  };

}).call(this);
