(function() {
  var i, x;

  console.log("+ Addition: " + (1 + 1));

  console.log("- Subtraction: " + (10 - 1));

  console.log("* Multiplication: " + (5 * 5));

  console.log("/ Division: " + (100 / 10));

  console.log("% Modulus: " + (10 % 3));

  console.log("+ Unary conversion of string to number: " + (+'100'));

  console.log("- Unary negation: " + (-50));

  i = 1;

  x = ++i;

  console.log("++ Increment: " + x);

  i = 1;

  x = --i;

  console.log("-- Decrement: " + x);

}).call(this);
