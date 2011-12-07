(function() {
  var Application, CoffeeScript, fs, http, server, url;

  http = require('http');

  url = require('url');

  fs = require('fs');

  CoffeeScript = require('coffee-script');

  Application = (function() {

    function Application(req, res) {
      this.req = req;
      this.res = res;
      this.pathInfo = url.parse(this.req.url, true);
    }

    Application.prototype.process = function(callback) {
      this.startTime = new Date();
      this.standardizePathname();
      this.setContentType();
      if (/^\/javascripts\//.test(this.pathname)) {
        this.processJavascript();
      } else {
        this.processPublic();
      }
      this.endTime = new Date();
      return callback(this);
    };

    Application.prototype.processJavascript = function() {
      var file;
      var _this = this;
      file = (/\/javascripts\/(.+)\.js/.exec(this.pathname))[1];
      return fs.readFile("src/" + file + ".coffee", "utf-8", function(err, data) {
        var js;
        if (err != null) {
          return _this.write("", 404);
        } else {
          js = CoffeeScript.compile(data);
          return _this.write(js);
        }
      });
    };

    Application.prototype.processPublic = function() {
      var _this = this;
      return fs.readFile("public/" + this.pathname, "utf-8", function(err, data) {
        if (err != null) {
          return _this.write("Oops! We couldn't find the page you were looking for.", 404);
        } else {
          return _this.write(data);
        }
      });
    };

    Application.prototype.standardizePathname = function() {
      if (this.pathInfo.pathname === "/" || this.pathInfo.pathname === "") {
        this.pathInfo.pathname = "index";
      }
      if (!/\..+$/.test(this.pathInfo.pathname)) this.pathInfo.pathname += ".html";
      return this.pathname = this.pathInfo.pathname;
    };

    Application.prototype.setContentType = function() {
      var ext;
      ext = (/\.(.+)$/.exec(this.pathname))[1].toLowerCase();
      switch (ext) {
        case "png":
        case "jpg":
        case "jpeg":
        case "gif":
          return this.contentType = "image/" + ext;
        case "js":
          return this.contentType = "application/x-javascript";
        default:
          return this.contentType = "text/html";
      }
    };

    Application.prototype.write = function(data, status, headers) {
      if (status == null) status = 200;
      if (headers == null) headers = {};
      headers["Content-Type"] || (headers["Content-Type"] = this.contentType);
      this.res.writeHead(status, headers);
      return this.res.end(data);
    };

    Application.prototype.time = function() {
      return this.endTime - this.startTime;
    };

    return Application;

  })();

  server = http.createServer(function(req, res) {
    return (function(req, res) {
      var app;
      app = new Application(req, res);
      return app.process(function(app) {
        return typeof console !== "undefined" && console !== null ? console.log("Processed: " + req.url + " (" + (app.time()) + "ms)") : void 0;
      });
    })(req, res);
  });

  server.listen(3000, "127.0.0.1");

  console.log('Server running at http://127.0.0.1:3000/');

}).call(this);
