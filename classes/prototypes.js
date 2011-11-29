(function() {
  var myArray;

  myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  try {
    console.log(myArray.size());
  } catch (error) {
    console.log(error);
  }

  Array.prototype.size = function() {
    return this.length;
  };

  console.log(myArray.size());

  myArray.push(11);

  console.log(myArray.size());

}).call(this);
