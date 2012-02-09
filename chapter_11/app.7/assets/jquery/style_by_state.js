(function() {

  this.TodoApp || (this.TodoApp = {});

  TodoApp.styleByState = function(li, todo) {
    if (todo.state === "completed") {
      $('.todo_state', li).attr('checked', true);
      $('label.active', li).removeClass('active');
      return $('.todo_title', li).addClass('completed').attr('disabled', true);
    } else {
      $('.todo_state', li).attr('checked', false);
      $('label', li).addClass('active');
      return $('.todo_title', li).removeClass('completed').attr('disabled', false);
    }
  };

}).call(this);
