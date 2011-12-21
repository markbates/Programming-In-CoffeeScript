(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  this.TodoListView = (function(_super) {

    __extends(TodoListView, _super);

    function TodoListView() {
      this.renderAdded = __bind(this.renderAdded, this);
      this.render = __bind(this.render, this);
      TodoListView.__super__.constructor.apply(this, arguments);
    }

    TodoListView.prototype.el = '#todos';

    TodoListView.prototype.initialize = function() {
      this.collection.bind("reset", this.render);
      this.collection.bind("add", this.renderAdded);
      this.collection.fetch();
      return new NewTodoView({
        collection: this.collection
      });
    };

    TodoListView.prototype.render = function() {
      var _this = this;
      return this.collection.forEach(function(todo) {
        return $(_this.el).append(new TodoListItemView({
          model: todo
        }).el);
      });
    };

    TodoListView.prototype.renderAdded = function(todo) {
      return $("#new_todo").after(new TodoListItemView({
        model: todo
      }).el);
    };

    return TodoListView;

  })(Backbone.View);

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
      return this.collection.bind("add", this.modelAdded);
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
          return alert(error);
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

  this.TodoListItemView = (function(_super) {

    __extends(TodoListItemView, _super);

    function TodoListItemView() {
      this.destroy = __bind(this.destroy, this);
      this.modelSaveFailed = __bind(this.modelSaveFailed, this);
      this.stateChanged = __bind(this.stateChanged, this);
      this.saveModelKeypress = __bind(this.saveModelKeypress, this);
      this.saveModel = __bind(this.saveModel, this);
      this.render = __bind(this.render, this);
      TodoListItemView.__super__.constructor.apply(this, arguments);
    }

    TodoListItemView.prototype.tagName = 'li';

    TodoListItemView.prototype.events = {
      'keypress .todo_title': 'saveModelKeypress',
      'change .todo_state': 'stateChanged',
      'click .danger': 'destroy'
    };

    TodoListItemView.prototype.initialize = function() {
      this.template = _.template($('#list_item_template').html());
      this.model.bind("change", this.render);
      this.model.bind("error", this.modelSaveFailed);
      return this.render();
    };

    TodoListItemView.prototype.render = function() {
      $(this.el).html(this.template(this.model.toJSON()));
      this.delegateEvents();
      if (this.model.get('state') === "completed") {
        this.$('.todo_state').attr('checked', true);
        this.$('label.active').removeClass('active');
        this.$('.todo_title').addClass('completed').attr('disabled', true);
      }
      return this;
    };

    TodoListItemView.prototype.saveModel = function(e) {
      var attrs, checked;
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
      return this.model.save(attrs);
    };

    TodoListItemView.prototype.saveModelKeypress = function(e) {
      if (e.keyCode === 13) return this.saveModel(e);
    };

    TodoListItemView.prototype.stateChanged = function(e) {
      return this.saveModel();
    };

    TodoListItemView.prototype.modelSaveFailed = function(model, error) {
      alert(error);
      return this.$('.todo_title').val(this.model.get('title'));
    };

    TodoListItemView.prototype.destroy = function(e) {
      var _this = this;
      if (confirm("Are you sure you want to destroy this todo?")) {
        return this.model.destroy({
          success: function() {
            return $(_this.el).remove();
          }
        });
      }
    };

    return TodoListItemView;

  })(Backbone.View);

}).call(this);
