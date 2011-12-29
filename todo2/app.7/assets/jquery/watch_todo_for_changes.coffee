@TodoApp ||= {}

# Watch the todo for changes:
TodoApp.watchForChanges = (li, todo) ->
  # If the checkbox is checked/unchecked:
  $('.todo_state', li).click (e) =>
    TodoApp.updateTodo(li, todo)
  # If someone hits "enter" in the title field:
  $('.todo_title', li).keypress (e) =>
    if e.keyCode is 13
      TodoApp.updateTodo(li, todo)