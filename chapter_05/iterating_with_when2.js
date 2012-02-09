(function() {
  var a, num, _i, _len;

  a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (_i = 0, _len = a.length; _i < _len; _i++) {
    num = a[_i];
    if (num < 5) console.log(num);
  }

}).call(this);
