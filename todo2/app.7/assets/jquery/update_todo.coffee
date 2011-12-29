@TodoApp ||= {}
      
# Update the todo:
TodoApp.updateTodo = (li, todo) ->
  todo.title = $('.todo_title', li).val()
  if !todo.title? or todo.title.trim() is ""
    alert "Title can't be blank"
  else
    if $('.todo_state', li).attr('checked')?
      todo.state = 'completed'
    else
      todo.state = 'pending'
    request = $.post "/api/todos/#{todo._id}", 
      todo: todo
      _method: 'put'
    request.fail (response) =>
      message = JSON.parse(response.responseText).message
      alert message
    request.done (todo) ->
      TodoApp.styleByState(li, todo)