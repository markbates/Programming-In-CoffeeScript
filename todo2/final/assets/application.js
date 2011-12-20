(function() {

  $(function() {
    return new TodoListView({
      collection: new Todos()
    });
  });

}).call(this);
