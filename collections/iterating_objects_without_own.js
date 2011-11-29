(function() {
  var anotherObject, key, myObject, value;

  myObject = {
    name: "Mark"
  };

  for (key in myObject) {
    value = myObject[key];
    console.log("" + key + ": " + value);
  }

  Object.prototype.dob = new Date(1976, 7, 24);

  for (key in myObject) {
    value = myObject[key];
    console.log("" + key + ": " + value);
  }

  anotherObject = {
    name: "Bob"
  };

  for (key in anotherObject) {
    value = anotherObject[key];
    console.log("" + key + ": " + value);
  }

}).call(this);
