(function() {
  var obj;

  obj = {
    firstName: "Mark",
    lastName: "Bates",
    fullName: function() {
      return "" + this.firstName + " " + this.lastName;
    }
  };

  console.log(obj.firstName);

  console.log(obj['lastName']);

  console.log(obj.fullName());

}).call(this);
