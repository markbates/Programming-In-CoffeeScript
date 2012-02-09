(function() {

  app.get('/api/todos', function(req, res) {
    var _this = this;
    return Todo.find({}, [], {
      sort: [["created_at", -1]]
    }, function(err, todos) {
      _this.todos = todos;
      if (err != null) {
        return res.json(err, 500);
      } else {
        return res.json(_this.todos);
      }
    });
  });

  app.post('/api/todos', function(req, res) {
    return res.json({});
  });

  app.get('/api/todos/:id', function(req, res) {
    return res.json({});
  });

  app.put("/api/todos/:id", function(req, res) {
    return res.json({});
  });

  app["delete"]('/api/todos/:id', function(req, res) {
    return res.json({});
  });

}).call(this);
