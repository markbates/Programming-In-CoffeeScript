(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  this.TodoListItemView = (function(_super) {

    __extends(TodoListItemView, _super);

    function TodoListItemView() {
      this.modelSaveFailed = __bind(this.modelSaveFailed, this);
      this.saveModel = __bind(this.saveModel, this);
      this.handleKeypress = __bind(this.handleKeypress, this);
      this.render = __bind(this.render, this);
      TodoListItemView.__super__.constructor.apply(this, arguments);
    }

    TodoListItemView.prototype.tagName = 'li';

    TodoListItemView.prototype.events = {
      'keypress .todo_title': 'handleKeypress',
      'change .todo_state': 'saveModel'
    };

    TodoListItemView.prototype.initialize = function() {
      this.template = _.template(Templates.list_item_template);
      this.model.bind("change", this.render);
      this.model.bind("error", this.modelSaveFailed);
      return this.render();
    };

    TodoListItemView.prototype.render = function() {
      $(this.el).html(this.template(this.model.toJSON()));
      if (this.model.get('state') === "completed") {
        this.$('.todo_state').attr('checked', true);
        this.$('label.active').removeClass('active');
        this.$('.todo_title').addClass('completed').attr('disabled', true);
      }
      return this;
    };

    TodoListItemView.prototype.handleKeypress = function(e) {
      if (e.keyCode === 13) return this.saveModel(e);
    };

    TodoListItemView.prototype.saveModel = function(e) {
      var attrs;
      if (e != null) e.preventDefault();
      attrs = {
        title: this.$('.todo_title').val()
      };
      if (this.$('.todo_state').attr('checked') != null) {
        attrs.state = 'completed';
      } else {
        attrs.state = 'pending';
      }
      return this.model.save(attrs);
    };

    TodoListItemView.prototype.modelSaveFailed = function(model, error) {
      if (error.responseText != null) error = JSON.parse(error.responseText);
      alert(error.message);
      return this.$('.todo_title').val(this.model.get('title'));
    };

    return TodoListItemView;

  })(Backbone.View);

}).call(this);
