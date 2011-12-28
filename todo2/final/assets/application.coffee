#= require "backbone_sync"
#= require "templates"
#= require_tree "views"
#= require_tree "models"

$ ->
  # Start Backbone.js App:
  new TodoListView(collection: new Todos())