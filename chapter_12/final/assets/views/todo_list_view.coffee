# The 'main' Backbone view of the application
class @TodoListView extends Backbone.View
  
  el: '#todos'
  
  initialize: ->
    @collection.bind("reset", @render)
    @collection.fetch()
    @collection.bind("add", @renderAdded)
    new NewTodoView(collection: @collection)
    
  render: =>
    @collection.forEach (todo) =>
      $(@el).append(new TodoListItemView(model: todo).el)
      
  renderAdded: (todo) =>
    $("#new_todo").after(new TodoListItemView(model: todo).el)