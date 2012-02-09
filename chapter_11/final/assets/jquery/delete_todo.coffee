@TodoApp ||= {}

# Delete the todo:
TodoApp.deleteTodo = (li, todo) ->
  if confirm "Are you sure?"
    request = $.post "/api/todos/#{todo._id}", _method: 'delete'
    request.done =>
      li.remove()