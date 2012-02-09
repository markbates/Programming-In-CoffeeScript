http = require('http')

class Application
  
  constructor: (@req, @res) ->
    
  process: ->
    

port = 3000
ip = "127.0.0.1"

server = http.createServer (req, res) ->
  app = new Application(req, res)
  app.process()

server.listen(port, ip)

console.log "Server running at http://#{ip}:#{port}/"