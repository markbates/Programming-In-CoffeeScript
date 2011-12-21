# Change the syntax for underscore.js templates.
# The pattern is now {{some_var}} instead of <%= some_var %>
_.templateSettings =
  interpolate : /\{\{(.+?)\}\}/g

# The 'main' Backbone view of the application
class @TodoListView extends Backbone.View
  
  el: '#todos'
  
  initialize: ->
    @collection.bind("reset", @render)
    @collection.bind("add", @renderAdded)
    @collection.fetch()
    new NewTodoView(collection: @collection)
    
  render: =>
    @collection.forEach (todo) =>
      $(@el).append(new TodoListItemView(model: todo).el)
      
  renderAdded: (todo) =>
    $("#new_todo").after(new TodoListItemView(model: todo).el)

# The view to handle creating new Todos:
class @NewTodoView extends Backbone.View

  el: '#new_todo'

  events:
    'keypress .todo_title': 'saveModelKeypress'

  initialize: ->
    @collection.bind("add", @modelAdded)

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
      error: (model, error)=>
        alert error

  saveModelKeypress: (e) =>
    if e.keyCode is 13
      @saveModel(e)
      
  modelAdded: (todo) =>
    @$('.todo_title').val("")
   
# The view for each todo in the list:
class @TodoListItemView extends Backbone.View
  
  tagName: 'li'
  
  events:
    'keypress .todo_title': 'saveModelKeypress'
    'change .todo_state': 'stateChanged'
    'click .danger': 'destroy'
  
  initialize: ->
    @template = _.template($('#list_item_template').html())
    @model.bind("change", @render)
    @model.bind("error", @modelSaveFailed)
    @render()
    
  render: =>
    $(@el).html(@template(@model.toJSON()))
    @delegateEvents()
    if @model.get('state') is "completed"
      @$('.todo_state').attr('checked', true)
      @$('label.active').removeClass('active')
      @$('.todo_title').addClass('completed').attr('disabled', true)
    return @
    
  saveModel: (e) =>
    e?.preventDefault()
    attrs = {title: @$('.todo_title').val()}
    checked = @$('.todo_state').attr('checked')
    if checked?
      attrs.state = 'completed'
    else
      attrs.state = 'pending'
    @model.save attrs
    
  saveModelKeypress: (e) =>
    if e.keyCode is 13
      @saveModel(e)
      
  stateChanged: (e) =>
    @saveModel()
    
  modelSaveFailed: (model, error) =>
    alert error
    @$('.todo_title').val(@model.get('title'))
    
  destroy: (e) =>
    if confirm "Are you sure you want to destroy this todo?"
      @model.destroy
        success: =>
          $(@el).remove()