@TodoApp ||= {}

TodoApp.appendTodo = (todo) ->
  li = $("<li>#{_.template(Templates.list_item_template)(todo)}</li>")
  $('#new_todo').after(li)

# @TodoApp ||= {}
# 
# TodoApp.appendTodo = (todo) ->
#   li = $("<li>#{_.template(Templates.list_item_template)(todo)}</li>")
#   $('#new_todo').after(li)
#   TodoApp.updateState(li, todo)
#   li.find('button.danger').click ->
#     TodoApp.deleteTodo(li, todo)
#   li.find('.todo_state').click ->
#     TodoApp.updateTodo(li, todo)
#     
# # Update the state of the checkbox:
# TodoApp.updateState = (li, todo) ->
#   if todo.state is "completed"
#     li.find('.todo_state').attr('checked', true)
#     li.find('label.active').removeClass('active')
#     li.find('.todo_title').addClass('completed').attr('disabled', true)  
#   else
#     li.find('.todo_state').attr('checked', false)
#     li.find('label.active').addClass('active')
#     li.find('.todo_title').removeClass('completed').attr('disabled', false)
#     
# # Delete the todo:
# TodoApp.deleteTodo = (li, todo) ->
#   console.log "delete: #{todo.title}"
# 
# # Update the todo:
# TodoApp.updateTodo = (li, todo) ->
#   console.log "update: #{todo.title}"
#   
#   
# $ ->
#   request = $.get('/api/todos')
#   request.done (todos) ->
#     for todo in todos.reverse()
#       TodoApp.appendTodo(todo)