(function() {
  var letter, myLetters, _i, _len;

  myLetters = ["a", "b", "c", "d"];

  for (_i = 0, _len = myLetters.length; _i < _len; _i++) {
    letter = myLetters[_i];
    console.log(letter.toUpperCase());
  }

}).call(this);
