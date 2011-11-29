(function() {
  var obj;

  obj = {
    firstName: "Mark",
    lastName: "Bates",
    fullName: function() {
      return "" + this.firstName + " " + this.lastName;
    }
  };

  obj.firstName = 'MARK';

  console.log(obj.firstName);

  obj['lastName'] = 'BATES';

  console.log(obj['lastName']);

}).call(this);
