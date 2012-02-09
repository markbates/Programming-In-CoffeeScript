(function() {

  $(function() {
    $('#new_todo .todo_title').focus();
    return $('#new_todo .todo_title').keypress(function(e) {
      var request, todo,
        _this = this;
      if (e.keyCode === 13) {
        todo = {
          title: $(e.target).val()
        };
        if (!(todo.title != null) || todo.title.trim() === "") {
          return alert("Title can't be blank");
        } else {
          request = $.post("/api/todos", {
            todo: todo
          });
          request.fail(function(response) {
            var message;
            message = JSON.parse(response.responseText).message;
            return alert(message);
          });
          return request.done(function(todo) {
            TodoApp.appendTodo(todo);
            return $(e.target).val("");
          });
        }
      }
    });
  });

}).call(this);
