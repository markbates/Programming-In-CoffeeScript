(function() {

  app.get('/api/todos', function(req, res) {
    var query,
      _this = this;
    query = Todo.find({});
    query.desc('created_at');
    return query.exec(function(err, todos) {
      _this.todos = todos;
      if (err != null) {
        return res.json(err, 500);
      } else {
        return res.json(_this.todos);
      }
    });
  });

  app.get('/api/todos/:id', function(req, res) {
    var _this = this;
    return Todo.findOne({
      _id: req.param('id')
    }, function(err, todo) {
      _this.todo = todo;
      if (err != null) {
        return res.json(err, 500);
      } else {
        return res.json(_this.todo);
      }
    });
  });

  app.post('/api/todos', function(req, res) {
    var _this = this;
    this.todo = new Todo(req.param('todo'));
    return this.todo.save(function(err) {
      if (err != null) {
        return res.json(err, 500);
      } else {
        return res.json(_this.todo);
      }
    });
  });

  app.put("/api/todos/:id", function(req, res) {
    var _this = this;
    return Todo.findOne({
      _id: req.param('id')
    }, function(err, todo) {
      _this.todo = todo;
      _this.todo.set(req.param('todo'));
      return _this.todo.save(function(err) {
        if (err != null) {
          return res.json(err, 500);
        } else {
          return res.json(_this.todo);
        }
      });
    });
  });

  app["delete"]('/api/todos/:id', function(req, res) {
    var _this = this;
    return Todo.findOne({
      _id: req.param('id')
    }, function(err, todo) {
      _this.todo = todo;
      if (err != null) {
        return res.json(err, 500);
      } else {
        _this.todo.remove();
        return res.json({});
      }
    });
  });

}).call(this);
