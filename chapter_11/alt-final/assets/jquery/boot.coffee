$ ->
  new TodoFormView()

  request = $.get('/api/todos')
  request.done (todos) ->
    for todo in todos.reverse()
      new TodoItemView(todo)