(function() {
  var key, person, value;

  person = {
    firstName: "Mark",
    lastName: "Bates"
  };

  for (key in person) {
    value = person[key];
    console.log("" + key + " is " + value);
  }

}).call(this);
