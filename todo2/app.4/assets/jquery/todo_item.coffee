@TodoApp ||= {}

TodoApp.appendTodo = (todo) ->
  li = $("<li>#{_.template(Templates.list_item_template)(todo)}</li>")
  $('#new_todo').after(li)