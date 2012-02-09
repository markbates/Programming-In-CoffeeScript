(function() {
  var app;

  global.express = require('express');

  global.app = app = express.createServer();

  require("" + __dirname + "/src/configuration");

  require("" + __dirname + "/src/controllers/home_controller");

  app.listen(3000);

  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

}).call(this);
