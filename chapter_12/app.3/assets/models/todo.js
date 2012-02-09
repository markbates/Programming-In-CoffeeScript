(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  this.Todo = (function(_super) {

    __extends(Todo, _super);

    function Todo() {
      Todo.__super__.constructor.apply(this, arguments);
    }

    Todo.prototype.paramRoot = 'todo';

    Todo.prototype.url = function() {
      var u;
      u = "/api/todos";
      if (!this.isNew()) u += "/" + (this.get("_id"));
      return u;
    };

    Todo.prototype.isNew = function() {
      return !(this.get("_id") != null);
    };

    return Todo;

  })(Backbone.Model);

}).call(this);
