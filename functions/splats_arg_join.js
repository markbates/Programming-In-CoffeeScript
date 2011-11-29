(function() {
  var joinArgs;
  var __slice = Array.prototype.slice;

  joinArgs = function() {
    var first, last, middle, middles, parts, _i, _j, _len;
    first = arguments[0], middles = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), last = arguments[_i++];
    parts = [];
    if (first != null) parts.push(first.toUpperCase());
    for (_j = 0, _len = middles.length; _j < _len; _j++) {
      middle = middles[_j];
      parts.push(middle.toLowerCase());
    }
    if (last != null) parts.push(last.toUpperCase());
    return parts.join('/');
  };

  console.log(joinArgs("a"));

  console.log(joinArgs("a", "b"));

  console.log(joinArgs("a", "B", "C", "d"));

}).call(this);
