(function() {

  app.get('/', function(req, res) {
    return res.render('index', {
      layout: false
    });
  });

}).call(this);
