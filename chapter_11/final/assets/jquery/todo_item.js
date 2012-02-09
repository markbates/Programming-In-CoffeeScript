(function() {

  this.TodoApp || (this.TodoApp = {});

  TodoApp.appendTodo = function(todo) {
    var li;
    li = $("<li>" + (_.template(Templates.list_item_template)(todo)) + "</li>");
    $('#new_todo').after(li);
    TodoApp.watchForChanges(li, todo);
    return TodoApp.styleByState(li, todo);
  };

}).call(this);
