(function() {
  var a, b, x, z;

  console.log("= Assign:");

  x = 10;

  console.log(x);

  console.log("+= Add and assign:");

  x += 25;

  console.log(x);

  console.log("-= Subtract and assign:");

  x -= 25;

  console.log(x);

  console.log("*= Multiply and assign:");

  x *= 10;

  console.log(x);

  console.log("/= Divide and assign:");

  x /= 10;

  console.log(x);

  console.log("%= Modulus and assign:");

  x %= 3;

  console.log(x);

  console.log("?= Exists or assign:");

  if (typeof y === "undefined" || y === null) y = 3;

  console.log(y);

  if (typeof y === "undefined" || y === null) y = 100;

  console.log(y);

  console.log("||= Or or assign:");

  z = null;

  z || (z = 10);

  console.log(z);

  z || (z = 100);

  console.log(z);

  console.log("&&= Assign if both are true:");

  a = 1;

  b = 2;

  console.log(a && (a = b));

  console.log(a);

}).call(this);
