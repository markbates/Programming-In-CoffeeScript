# The view to handle creating new Todos:
class @NewTodoView extends Backbone.View

  el: '#new_todo'

  events:
    'keypress .todo_title': 'saveModelKeypress'

  initialize: ->
    @collection.bind("add", @modelAdded)
    @$('.todo_title').focus()

  saveModel: (e) =>
    e?.preventDefault()
    attrs = {title: @$('.todo_title').val()}
    checked = @$('.todo_state').attr('checked')
    if checked?
      attrs.state = 'completed'
    else
      attrs.state = 'pending'
    model = new Todo()
    model.save attrs,
      success: =>
        @collection.add(model)
      error: (model, error) =>
        if error.responseText?
          error = JSON.parse(error.responseText)
        alert error.message

  saveModelKeypress: (e) =>
    if e.keyCode is 13
      @saveModel(e)
      
  modelAdded: (todo) =>
    @$('.todo_title').val("")