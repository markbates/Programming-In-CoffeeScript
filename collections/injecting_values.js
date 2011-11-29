(function() {
  var myArray, _ref;

  myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log(myArray);

  [].splice.apply(myArray, [4, -1 - 4 + 1].concat(_ref = ['a', 'b', 'c', 'd'])), _ref;

  console.log(myArray);

}).call(this);
