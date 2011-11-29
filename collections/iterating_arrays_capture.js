(function() {
  var letter, myLetters, upLetters;

  myLetters = ["a", "b", "c", "d"];

  upLetters = (function() {
    var _i, _len, _results;
    _results = [];
    for (_i = 0, _len = myLetters.length; _i < _len; _i++) {
      letter = myLetters[_i];
      _results.push(letter.toUpperCase());
    }
    return _results;
  })();

  console.log(upLetters);

}).call(this);
