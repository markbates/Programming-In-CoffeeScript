(function() {

  this.TodoApp || (this.TodoApp = {});

  TodoApp.appendTodo = function(todo) {
    var li;
    li = $("<li>" + (_.template(Templates.list_item_template)(todo)) + "</li>");
    return $('#new_todo').after(li);
  };

}).call(this);
