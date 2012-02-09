(function() {

  this.TodoApp || (this.TodoApp = {});

  TodoApp.updateTodo = function(li, todo) {
    var request,
      _this = this;
    todo.title = $('.todo_title', li).val();
    if (!(todo.title != null) || todo.title.trim() === "") {
      return alert("Title can't be blank");
    } else {
      if ($('.todo_state', li).attr('checked') != null) {
        todo.state = 'completed';
      } else {
        todo.state = 'pending';
      }
      request = $.post("/api/todos/" + todo._id, {
        todo: todo,
        _method: 'put'
      });
      return request.fail(function(response) {
        var message;
        message = JSON.parse(response.responseText).message;
        return alert(message);
      });
    }
  };

}).call(this);
