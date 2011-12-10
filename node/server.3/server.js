(function() {
  var Application, http, ip, port, server;

  http = require('http');

  Application = (function() {

    function Application(req, res) {
      this.req = req;
      this.res = res;
    }

    Application.prototype.process = function() {};

    return Application;

  })();

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
