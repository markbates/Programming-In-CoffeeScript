@TodoApp ||= {}

# Update the style based on the state:
TodoApp.styleByState = (li, todo) ->
  if todo.state is "completed"
    $('.todo_state', li).attr('checked', true)
    $('label.active', li).removeClass('active')
    $('.todo_title', li).addClass('completed').attr('disabled', true)  
  else
    $('.todo_state', li).attr('checked', false)
    $('label', li).addClass('active')
    $('.todo_title', li).removeClass('completed').attr('disabled', false)