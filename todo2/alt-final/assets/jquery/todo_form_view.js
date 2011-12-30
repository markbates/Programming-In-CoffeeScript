(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.TodoFormView = (function() {

    function TodoFormView() {
      this.handleKeyPress = __bind(this.handleKeyPress, this);      this.el = $('#new_todo');
      this.$('.todo_title').focus();
      this.$('.todo_title').keypress(this.handleKeyPress);
    }

    TodoFormView.prototype.$ = function(selector) {
      return $(selector, this.el);
    };

    TodoFormView.prototype.handleKeyPress = function(e) {
      var request, todo,
        _this = this;
      if (e.keyCode === 13) {
        todo = {
          title: this.$('.todo_title').val()
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
            new TodoItemView(todo);
            return _this.$('.todo_title').val("");
          });
        }
      }
    };

    return TodoFormView;

  })();

}).call(this);
