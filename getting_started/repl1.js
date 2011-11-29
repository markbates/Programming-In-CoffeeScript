(function() {
  var a, b, x;

  a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  b = (function() {
    var _i, _len, _results;
    _results = [];
    for (_i = 0, _len = a.length; _i < _len; _i++) {
      x = a[_i];
      _results.push(x * x);
    }
    return _results;
  })();

  console.log(b);

}).call(this);
