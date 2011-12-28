$ ->
  # Focus the new todo form when the page loads:
  $('#new_todo .todo_title').focus()

  # Handle the keypress in the new todo form:
  $('#new_todo .todo_title').keypress (e) ->
    # we're only interested in the 'enter' key:
    if e.keyCode is 13
      todo = {title: $(e.target).val()}
      if !todo.title? or todo.title.trim() is ""
        alert "Title can't be blank"
      else
        request = $.post "/api/todos", todo: todo
        request.fail (response) =>
          message = JSON.parse(response.responseText).message
          alert message
        request.done (todo) =>
          TodoApp.appendTodo(todo)
          $(e.target).val("")
