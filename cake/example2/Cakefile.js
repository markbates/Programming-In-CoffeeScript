
  option('-n', '--name [NAME]', 'name you want to greet');

  task("greet", "Say hi to someone", function(options) {
    var message;
    message = "Hello, ";
    if (options.name != null) {
      message += options.name;
    } else {
      message += "World";
    }
    return console.log(message);
  });
