(function() {
  var times;

  times = function(number_of_times, callback) {
    var index;
    index = 0;
    while (!(index++ >= number_of_times)) {
      callback(index);
    }
    return null;
  };

  times(5, function(index) {
    return console.log(index);
  });

}).call(this);
