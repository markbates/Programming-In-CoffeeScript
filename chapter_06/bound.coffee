class User
  
  constructor: (@name) ->
    
  sayHi: =>
    console.log "Hello #{@name}"
    
bob = new User('bob')
mary = new User('mary')

log = (callback)->
  console.log "about to execute callback..."
  callback()
  console.log "...executed callback"

log(bob.sayHi)
log(mary.sayHi)