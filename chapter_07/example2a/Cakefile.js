(function() {

  option('-n', '--name [NAME]', 'name you want to greet');

  task("greet", "Say hi to someone", function(options) {
    if (options.name == null) throw new Error("[NAME] is required");
    return console.log("Hello, " + options.name);
  });

}).call(this);
