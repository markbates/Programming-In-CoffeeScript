(function() {
  var x, y, _ref;

  x = "X";

  y = "Y";

  console.log("x is " + x);

  console.log("y is " + y);

  _ref = [y, x], x = _ref[0], y = _ref[1];

  console.log("x is " + x);

  console.log("y is " + y);

}).call(this);
