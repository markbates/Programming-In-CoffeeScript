(function() {

  this.TodoApp || (this.TodoApp = {});

  TodoApp.watchForChanges = function(li, todo) {
    var _this = this;
    $('.todo_state', li).click(function(e) {
      return TodoApp.updateTodo(li, todo);
    });
    $('.todo_title', li).keypress(function(e) {
      if (e.keyCode === 13) return TodoApp.updateTodo(li, todo);
    });
    return $('button.danger', li).click(function(e) {
      e.preventDefault();
      return TodoApp.deleteTodo(li, todo);
    });
  };

}).call(this);
