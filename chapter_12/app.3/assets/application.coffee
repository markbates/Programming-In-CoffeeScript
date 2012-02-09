#= require "backbone_sync"
#= require "templates"
#= require_tree "models"

$ ->
  template = _.template(Templates.list_item_template)
  todos = new Todos()
  todos.fetch
    success: ->
      todos.forEach (todo) ->
        $('#todos').append("<li>#{template(todo.toJSON())}</li>")