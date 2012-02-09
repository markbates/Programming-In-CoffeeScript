require "#{__dirname}/show_responder"

class Responder.Destroy extends Responder.Show

  complete: (err, result = {}) =>
    unless err?
      result.remove()
    super