#= require "backbone_sync"
#= require "templates"
#= require_tree "models"
#= require_tree "views"

$ ->
  # Start Backbone.js App:
  new TodoListView(collection: new Todos())