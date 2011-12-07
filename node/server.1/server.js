(function() {
  var http, server;

  http = require('http');

  server = http.createServer(function(req, res) {
    return (function(req, res) {
      res.writeHead(200, {
        "Content-Type": "text/plain"
      });
      return res.end("Hello World!");
    })(req, res);
  });

  server.listen(3000, "127.0.0.1");

  console.log('Server running at http://127.0.0.1:3000/');

}).call(this);
