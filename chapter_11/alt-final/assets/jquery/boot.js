(function() {

  $(function() {
    var request;
    new TodoFormView();
    request = $.get('/api/todos');
    return request.done(function(todos) {
      var todo, _i, _len, _ref, _results;
      _ref = todos.reverse();
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        todo = _ref[_i];
        _results.push(new TodoItemView(todo));
      }
      return _results;
    });
  });

}).call(this);
