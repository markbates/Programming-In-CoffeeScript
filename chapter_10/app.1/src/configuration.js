(function() {

  app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.session({
      secret: 'd19e19fd62f62a216ecf7d7b1de434ad'
    }));
    app.use(app.router);
    app.use(express.static(__dirname + '../public'));
    return app.use(express.errorHandler({
      dumpExceptions: true,
      showStack: true
    }));
  });

}).call(this);
