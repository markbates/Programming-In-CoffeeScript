(function() {

  app.get('/api/todos', function(req, res) {
    return res.json([{}]);
  });

  app.get('/api/todos/:id', function(req, res) {
    return res.json({});
  });

  app.post('/api/todos', function(req, res) {
    return res.json({});
  });

  app.put("/api/todos/:id", function(req, res) {
    return res.json({});
  });

  app["delete"]('/api/todos/:id', function(req, res) {
    return res.json({});
  });

}).call(this);
