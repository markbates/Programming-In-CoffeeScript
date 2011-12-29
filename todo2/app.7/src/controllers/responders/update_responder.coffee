require "#{__dirname}/show_responder"

class Responder.Update extends Responder.Show
  
  complete: (err, result = {}) =>
    if err?
      super
    else
      result.set(@req.param('todo'))
      result.save(super)