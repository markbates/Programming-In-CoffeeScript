# The view to handle creating new Todos:
class @NewTodoView extends Backbone.View

  el: '#new_todo'

  events:
    'keypress .todo_title': 'handleKeypress'

  initialize: ->
    @collection.bind("add", @resetForm)
    @$('.todo_title').focus()
    
  handleKeypress: (e) =>
    if e.keyCode is 13
      @saveModel(e)
      
  resetForm: (todo) =>
    @$('.todo_title').val("")

  saveModel: (e) =>
    e?.preventDefault()
    model = new Todo()
    model.save {title: @$('.todo_title').val()},
      success: =>
        @collection.add(model)
      error: (model, error) =>
        if error.responseText?
          error = JSON.parse(error.responseText)
        alert error.message