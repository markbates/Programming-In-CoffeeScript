(function() {
  var http, ip, port, server;

  http = require('http');

  port = 3000;

  ip = "127.0.0.1";

  server = http.createServer(function(req, res) {
    var app;
    app = new Application(req, res);
    return app.process();
  });

  server.listen(port, ip);

  console.log("Server running at http://" + ip + ":" + port + "/");

}).call(this);
