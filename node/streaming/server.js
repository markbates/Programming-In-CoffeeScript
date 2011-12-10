(function() {
  var http, ip, port, server;

  http = require('http');

  port = 3000;

  ip = "127.0.0.1";

  server = http.createServer(function(req, res) {
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });
    setInterval(function() {
      return res.write("All work and no play makes Jack a dull boy. ");
    }, 10);
    return setTimeout(function() {
      return res.end();
    }, 30000);
  });

  server.listen(port, ip);

  console.log("Server running at http://" + ip + ":" + port + "/");

}).call(this);
