(function() {

  app.get('/todos', function(req, res) {
    var query,
      _this = this;
    query = Todo.find({});
    query.desc('created_at');
    return query.exec(function(err, todos) {
      _this.todos = todos;
      return res.send(JSON.stringify(_this.todos));
    });
  });

  app.get('/todos/:id', function(req, res) {
    var _this = this;
    return Todo.findOne({
      _id: req.param('id')
    }, function(err, todo) {
      _this.todo = todo;
      return res.send(JSON.stringify(_this.todo));
    });
  });

  app.post('/todos', function(req, res) {
    var _this = this;
    this.todo = new Todo(req.param('todo'));
    return this.todo.save(function(err) {
      return res.send(JSON.stringify(_this.todo));
    });
  });

  app.put("/todos/:id", function(req, res) {
    var _this = this;
    return Todo.findOne({
      _id: req.param('id')
    }, function(err, todo) {
      _this.todo = todo;
      _this.todo.set(req.param('todo'));
      return _this.todo.save(function(err) {
        return res.send(JSON.stringify(_this.todo));
      });
    });
  });

  app["delete"]('/todos/:id', function(req, res) {
    var _this = this;
    return Todo.findOne({
      _id: req.param('id')
    }, function(err, todo) {
      _this.todo = todo;
      _this.todo.remove();
      return res.send(JSON.stringify({}));
    });
  });

}).call(this);
