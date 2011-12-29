require "#{__dirname}/responder"

class Responder.Create extends Responder

  respond: (@req, @res) =>
    todo = new Todo(@req.param('todo'))
    todo.save(@complete)