class @TodoFormView
  
  constructor: ->
    @el = $('#new_todo')
    @$('.todo_title').focus()
    @$('.todo_title').keypress @handleKeyPress
  
  # Helper for easier selecting of elements:
  $: (selector) ->
    $(selector, @el)
    
  handleKeyPress: (e) =>
    # we're only interested in the 'enter' key:
    if e.keyCode is 13
      todo = {title: @$('.todo_title').val()}
      if !todo.title? or todo.title.trim() is ""
        alert "Title can't be blank"
      else
        request = $.post "/api/todos", todo: todo
        request.fail (response) =>
          message = JSON.parse(response.responseText).message
          alert message
        request.done (todo) =>
          new TodoItemView(todo)
          @$('.todo_title').val("")