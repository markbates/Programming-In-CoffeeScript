# The Todos collection for the Backbone client:
class @Todos extends Backbone.Collection
  model: Todo
  
  url: "/api/todos"