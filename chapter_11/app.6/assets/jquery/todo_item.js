(function() {

  this.TodoApp || (this.TodoApp = {});

  TodoApp.appendTodo = function(todo) {
    var li;
    li = $("<li>" + (_.template(Templates.list_item_template)(todo)) + "</li>");
    $('#new_todo').after(li);
    return TodoApp.watchForChanges(li, todo);
  };

}).call(this);
