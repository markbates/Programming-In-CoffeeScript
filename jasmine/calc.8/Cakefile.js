(function() {
  var exec,
    _this = this;

  exec = require('child_process').exec;

  task("test", function(options) {
    return exec("jasmine-headless-webkit -c", function(error, stdout, stderr) {
      return console.log(stdout);
    });
  });

}).call(this);
