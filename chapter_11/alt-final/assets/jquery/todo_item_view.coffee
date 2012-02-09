class @TodoItemView
  
  constructor: (@todo) ->
    @render()
    
  # Helper for easier selecting of elements:
  $: (selector) ->
    $(selector, @el)
    
  render: ->
    @el = $("<li>#{_.template(Templates.list_item_template)(@todo)}</li>")
    $('#new_todo').after(@el)
    @watchForChanges()
    @styleByState()
    
  watchForChanges: =>
    # If the checkbox is checked/unchecked:
    @$('.todo_state').click @updateTodo
    # If someone hits "enter" in the title field:
    @$('.todo_title').keypress (e) =>
      if e.keyCode is 13
        @updateTodo()
    # If someone hits the "destroy" button:
    @$('button.danger').click @destroyTodo
        
  updateTodo: =>
    @todo.title = @$('.todo_title').val()
    if !@todo.title? or @todo.title.trim() is ""
      alert "Title can't be blank"
    else
      if @$('.todo_state').attr('checked')?
        @todo.state = 'completed'
      else
        @todo.state = 'pending'
      request = $.post "/api/todos/#{@todo._id}", 
        todo: @todo
        _method: 'put'
      request.fail (response) =>
        message = JSON.parse(response.responseText).message
        alert message
      request.done =>
        @styleByState()
        
  destroyTodo: (e) =>
    e?.preventDefault()
    if confirm "Are you sure?"
      request = $.post "/api/todos/#{@todo._id}", _method: 'delete'
      request.done =>
        @el.remove()
        
  styleByState: =>
    if @todo.state is "completed"
      @$('.todo_state').attr('checked', true)
      @$('label.active').removeClass('active')
      @$('.todo_title').addClass('completed').attr('disabled', true)  
    else
      @$('.todo_state').attr('checked', false)
      @$('label').addClass('active')
      @$('.todo_title').removeClass('completed').attr('disabled', false)