(function() {
  var x;

  for (x = 1; x <= 5; x++) {
    setTimeout(function() {
      return console.log(x);
    }, 1);
  }

}).call(this);
