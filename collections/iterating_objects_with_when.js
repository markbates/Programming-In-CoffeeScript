(function() {
  var key, person, value;

  person = {
    firstName: "Mark",
    lastName: "Bates"
  };

  for (key in person) {
    value = person[key];
    if (value.length < 5) console.log("" + key + " is " + value);
  }

}).call(this);
