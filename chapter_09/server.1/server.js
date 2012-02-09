(function() {
  var http, ip, port, server;

  http = require('http');

  port = 3000;

  ip = "127.0.0.1";

  server = http.createServer(function(req, res) {
    var data;
    data = "Hello World!";
    res.writeHead(200, {
      "Content-Type": "text/plain",
      "Content-Length": Buffer.byteLength(data, "utf-8")
    });
    res.write(data, "utf-8");
    return res.end();
  });

  server.listen(port, ip);

  console.log("Server running at http://" + ip + ":" + port + "/");

}).call(this);
