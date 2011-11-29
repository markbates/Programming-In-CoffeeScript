(function() {
  var fire;

  fire = function(msg, wait) {
    return setTimeout(function() {
      return console.log(msg);
    }, wait);
  };

  fire("Hello", 3000);

  fire("World", 1000);

}).call(this);
