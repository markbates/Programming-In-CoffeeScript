(function() {
  var Application, JavaScriptProcessor, Processor, PublicProcessor, http, ip, port, server, url;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

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

  Processor = (function() {

    function Processor(req, res, pathInfo) {
      this.req = req;
      this.res = res;
      this.pathInfo = pathInfo;
    }

    Processor.prototype.contentType = function() {
      throw new Error("must be implemented!");
    };

    Processor.prototype.process = function() {
      throw new Error("must be implemented!");
    };

    Processor.prototype.pathname = function() {};

    Processor.prototype.write = function(data, status, headers) {
      if (status == null) status = 200;
      if (headers == null) headers = {};
    };

    return Processor;

  })();

  JavaScriptProcessor = (function() {

    __extends(JavaScriptProcessor, Processor);

    function JavaScriptProcessor() {
      JavaScriptProcessor.__super__.constructor.apply(this, arguments);
    }

    JavaScriptProcessor.prototype.contentType = function() {};

    JavaScriptProcessor.prototype.process = function() {};

    return JavaScriptProcessor;

  })();

  PublicProcessor = (function() {

    __extends(PublicProcessor, Processor);

    function PublicProcessor() {
      PublicProcessor.__super__.constructor.apply(this, arguments);
    }

    PublicProcessor.prototype.contentType = function() {};

    PublicProcessor.prototype.process = function() {};

    return PublicProcessor;

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
