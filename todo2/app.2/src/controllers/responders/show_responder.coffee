require "#{__dirname}/responder"

class Responder.Show extends Responder
  
  respond: (@req, @res) =>
    Todo.findById @req.param('id'), @complete