# The view for each todo in the list:
class @TodoListItemView extends Backbone.View
  
  tagName: 'li'
  
  events:
    'keypress .todo_title': 'saveModelKeypress'
    'change .todo_state': 'stateChanged'
    'click .danger': 'destroy'
  
  initialize: ->
    @template = _.template(Templates.list_item_template)
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
    if error.responseText?
      error = JSON.parse(error.responseText)
    alert error.message
    @$('.todo_title').val(@model.get('title'))
    
  destroy: (e) =>
    if confirm "Are you sure you want to destroy this todo?"
      @model.destroy
        success: =>
          $(@el).remove()