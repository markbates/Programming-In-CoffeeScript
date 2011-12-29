require "#{__dirname}/responder"

class Responder.Index extends Responder
  
  respond: (@req, @res) =>
    Todo.find {}, [], {sort: [["created_at", -1]]}, @complete