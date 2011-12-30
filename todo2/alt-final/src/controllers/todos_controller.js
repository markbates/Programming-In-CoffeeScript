(function() {
  var name, _i, _len, _ref;

  _ref = ["index", "create", "show", "update", "destroy"];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    name = _ref[_i];
    require("" + __dirname + "/responders/" + name + "_responder");
  }

  app.get('/api/todos', new Responder.Index().respond);

  app.post('/api/todos', new Responder.Create().respond);

  app.get('/api/todos/:id', new Responder.Show().respond);

  app.put("/api/todos/:id", new Responder.Update().respond);

  app["delete"]('/api/todos/:id', new Responder.Destroy().respond);

}).call(this);
