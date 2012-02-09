(function() {

  this.TodoApp || (this.TodoApp = {});

  TodoApp.watchForChanges = function(li, todo) {
    var _this = this;
    $('.todo_state', li).click(function(e) {
      return TodoApp.updateTodo(li, todo);
    });
    return $('.todo_title', li).keypress(function(e) {
      if (e.keyCode === 13) return TodoApp.updateTodo(li, todo);
    });
  };

}).call(this);
