(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  this.NewTodoView = (function(_super) {

    __extends(NewTodoView, _super);

    function NewTodoView() {
      this.modelAdded = __bind(this.modelAdded, this);
      this.saveModelKeypress = __bind(this.saveModelKeypress, this);
      this.saveModel = __bind(this.saveModel, this);
      NewTodoView.__super__.constructor.apply(this, arguments);
    }

    NewTodoView.prototype.el = '#new_todo';

    NewTodoView.prototype.events = {
      'keypress .todo_title': 'saveModelKeypress'
    };

    NewTodoView.prototype.initialize = function() {
      this.collection.bind("add", this.modelAdded);
      return this.$('.todo_title').focus();
    };

    NewTodoView.prototype.saveModel = function(e) {
      var attrs, checked, model,
        _this = this;
      if (e != null) e.preventDefault();
      attrs = {
        title: this.$('.todo_title').val()
      };
      checked = this.$('.todo_state').attr('checked');
      if (checked != null) {
        attrs.state = 'completed';
      } else {
        attrs.state = 'pending';
      }
      model = new Todo();
      return model.save(attrs, {
        success: function() {
          return _this.collection.add(model);
        },
        error: function(model, error) {
          if (error.responseText != null) error = JSON.parse(error.responseText);
          return alert(error.message);
        }
      });
    };

    NewTodoView.prototype.saveModelKeypress = function(e) {
      if (e.keyCode === 13) return this.saveModel(e);
    };

    NewTodoView.prototype.modelAdded = function(todo) {
      return this.$('.todo_title').val("");
    };

    return NewTodoView;

  })(Backbone.View);

}).call(this);
