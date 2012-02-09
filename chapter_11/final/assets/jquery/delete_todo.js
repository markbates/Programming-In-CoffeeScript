(function() {

  this.TodoApp || (this.TodoApp = {});

  TodoApp.deleteTodo = function(li, todo) {
    var request,
      _this = this;
    if (confirm("Are you sure?")) {
      request = $.post("/api/todos/" + todo._id, {
        _method: 'delete'
      });
      return request.done(function() {
        return li.remove();
      });
    }
  };

}).call(this);
