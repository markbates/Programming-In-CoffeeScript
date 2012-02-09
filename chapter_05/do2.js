(function() {
  var x, _fn;

  _fn = function(x) {
    return setTimeout(function() {
      return console.log(x);
    }, 1);
  };
  for (x = 1; x <= 5; x++) {
    _fn(x);
  }

}).call(this);
