$ ->
  request = $.get('/api/todos')
  request.done (todos) ->
    for todo in todos.reverse()
      TodoApp.appendTodo(todo)