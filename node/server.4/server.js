(function() {
  var Application, http, ip, port, server, url;

  http = require('http');

  url = require('url');

  Application = (function() {

    function Application(req, res) {
      this.req = req;
      this.res = res;
      this.pathInfo = url.parse(this.req.url, true);
    }

    Application.prototype.process = function() {
      if (/^\/javascripts\//.test(this.pathInfo.pathname)) {
        return new JavaScriptProcessor(this.req, this.res, this.pathInfo).process();
      } else {
        return new PublicProcessor(this.req, this.res, this.pathInfo).process();
      }
    };

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
