# The Todo model for the Backbone client:
class @Todo extends Backbone.Model
  # namespace JSON under 'todo' see backbone_sync.js
  paramRoot: 'todo'
  
  # Build the url, appending _id if it exists:
  url: ->
    u = "/api/todos"
    u += "/#{@get("_id")}" unless @isNew()
    return u
    
  # The default Backbone isNew function looks for 'id',
  # Mongoose returns "_id", so we need to update it accordingly:
  isNew: ->
    !@get("_id")?