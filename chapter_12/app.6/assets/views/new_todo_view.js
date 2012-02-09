(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  this.NewTodoView = (function(_super) {

    __extends(NewTodoView, _super);

    function NewTodoView() {
      this.saveModel = __bind(this.saveModel, this);
      this.resetForm = __bind(this.resetForm, this);
      this.handleKeypress = __bind(this.handleKeypress, this);
      NewTodoView.__super__.constructor.apply(this, arguments);
    }

    NewTodoView.prototype.el = '#new_todo';

    NewTodoView.prototype.events = {
      'keypress .todo_title': 'handleKeypress'
    };

    NewTodoView.prototype.initialize = function() {
      this.collection.bind("add", this.resetForm);
      return this.$('.todo_title').focus();
    };

    NewTodoView.prototype.handleKeypress = function(e) {
      if (e.keyCode === 13) return this.saveModel(e);
    };

    NewTodoView.prototype.resetForm = function(todo) {
      return this.$('.todo_title').val("");
    };

    NewTodoView.prototype.saveModel = function(e) {
      var model,
        _this = this;
      if (e != null) e.preventDefault();
      model = new Todo();
      return model.save({
        title: this.$('.todo_title').val()
      }, {
        success: function() {
          return _this.collection.add(model);
        },
        error: function(model, error) {
          if (error.responseText != null) error = JSON.parse(error.responseText);
          return alert(error.message);
        }
      });
    };

    return NewTodoView;

  })(Backbone.View);

}).call(this);
