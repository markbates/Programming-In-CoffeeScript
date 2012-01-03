(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  this.TodoListItemView = (function(_super) {

    __extends(TodoListItemView, _super);

    function TodoListItemView() {
      this.render = __bind(this.render, this);
      TodoListItemView.__super__.constructor.apply(this, arguments);
    }

    TodoListItemView.prototype.tagName = 'li';

    TodoListItemView.prototype.initialize = function() {
      this.template = _.template(Templates.list_item_template);
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

    return TodoListItemView;

  })(Backbone.View);

}).call(this);
