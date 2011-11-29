(function() {
  var obj;

  obj = {
    firstName: "Mark",
    lastName: "Bates",
    fullName: function() {
      return "" + this.firstName + " " + this.lastName;
    }
  };

  console.log(obj);

}).call(this);
