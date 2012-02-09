(function() {
  var myArray,
    __indexOf = Array.prototype.indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  myArray = ["a", "b", "c"];

  if (__indexOf.call(myArray, "b") >= 0) console.log("I found 'b'.");

  if (__indexOf.call(myArray, "d") < 0) {
    console.log("'d' was nowhere to be found.");
  }

}).call(this);
