(function() {
  var anotherObject, key, myObject, value;
  var __hasProp = Object.prototype.hasOwnProperty;

  myObject = {
    name: "Mark"
  };

  for (key in myObject) {
    if (!__hasProp.call(myObject, key)) continue;
    value = myObject[key];
    console.log("" + key + ": " + value);
  }

  Object.prototype.dob = new Date(1976, 7, 24);

  for (key in myObject) {
    if (!__hasProp.call(myObject, key)) continue;
    value = myObject[key];
    console.log("" + key + ": " + value);
  }

  anotherObject = {
    name: "Bob"
  };

  for (key in anotherObject) {
    if (!__hasProp.call(anotherObject, key)) continue;
    value = anotherObject[key];
    console.log("" + key + ": " + value);
  }

}).call(this);
