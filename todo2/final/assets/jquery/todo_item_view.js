(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.TodoItemView = (function() {

    function TodoItemView(todo) {
      this.todo = todo;
      this.styleByState = __bind(this.styleByState, this);
      this.destroyTodo = __bind(this.destroyTodo, this);
      this.updateTodo = __bind(this.updateTodo, this);
      this.watchForChanges = __bind(this.watchForChanges, this);
      this.render();
    }

    TodoItemView.prototype.$ = function(selector) {
      return $(selector, this.el);
    };

    TodoItemView.prototype.render = function() {
      this.el = $("<li>" + (_.template(Templates.list_item_template)(this.todo)) + "</li>");
      $('#new_todo').after(this.el);
      this.watchForChanges();
      return this.styleByState();
    };

    TodoItemView.prototype.watchForChanges = function() {
      var _this = this;
      this.$('.todo_state').click(this.updateTodo);
      this.$('.todo_title').keypress(function(e) {
        if (e.keyCode === 13) return _this.updateTodo();
      });
      return this.$('button.danger').click(this.destroyTodo);
    };

    TodoItemView.prototype.updateTodo = function() {
      var request,
        _this = this;
      this.todo.title = this.$('.todo_title').val();
      if (!(this.todo.title != null) || this.todo.title.trim() === "") {
        return alert("Title can't be blank");
      } else {
        if (this.$('.todo_state').attr('checked') != null) {
          this.todo.state = 'completed';
        } else {
          this.todo.state = 'pending';
        }
        request = $.post("/api/todos/" + this.todo._id, {
          todo: this.todo,
          _method: 'put'
        });
        request.fail(function(response) {
          var message;
          message = JSON.parse(response.responseText).message;
          return alert(message);
        });
        return request.done(function() {
          return _this.styleByState();
        });
      }
    };

    TodoItemView.prototype.destroyTodo = function(e) {
      var request,
        _this = this;
      if (e != null) e.preventDefault();
      if (confirm("Are you sure?")) {
        request = $.post("/api/todos/" + this.todo._id, {
          _method: 'delete'
        });
        return request.done(function() {
          return _this.el.remove();
        });
      }
    };

    TodoItemView.prototype.styleByState = function() {
      if (this.todo.state === "completed") {
        this.$('.todo_state').attr('checked', true);
        this.$('label.active').removeClass('active');
        return this.$('.todo_title').addClass('completed').attr('disabled', true);
      } else {
        this.$('.todo_state').attr('checked', false);
        this.$('label').addClass('active');
        return this.$('.todo_title').removeClass('completed').attr('disabled', false);
      }
    };

    return TodoItemView;

  })();

}).call(this);
