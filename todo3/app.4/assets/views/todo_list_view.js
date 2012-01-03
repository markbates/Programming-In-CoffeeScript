(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  this.TodoListView = (function(_super) {

    __extends(TodoListView, _super);

    function TodoListView() {
      this.render = __bind(this.render, this);
      TodoListView.__super__.constructor.apply(this, arguments);
    }

    TodoListView.prototype.el = '#todos';

    TodoListView.prototype.initialize = function() {
      this.template = _.template(Templates.list_item_template);
      this.collection.bind("reset", this.render);
      return this.collection.fetch();
    };

    TodoListView.prototype.render = function() {
      var _this = this;
      return this.collection.forEach(function(todo) {
        return $(_this.el).append("<li>" + (_this.template(todo.toJSON())) + "</li>");
      });
    };

    return TodoListView;

  })(Backbone.View);

}).call(this);
