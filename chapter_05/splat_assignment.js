(function() {
  var end, middle, myArray, start, _i,
    __slice = Array.prototype.slice;

  myArray = ["A", "B", "C", "D"];

  start = myArray[0], middle = 3 <= myArray.length ? __slice.call(myArray, 1, _i = myArray.length - 1) : (_i = 1, []), end = myArray[_i++];

  console.log("start is " + start);

  console.log("middle is " + middle);

  console.log("end is " + end);

}).call(this);
