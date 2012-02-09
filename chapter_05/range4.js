(function() {
  var myRange, _i, _results;

  myRange = (function() {
    _results = [];
    for (_i = 1; _i <= 50; _i++){ _results.push(_i); }
    return _results;
  }).apply(this);

  console.log(myRange.join(", "));

}).call(this);
