http = require('http')
url = require('url')

class Application
  
  constructor: (@req, @res) ->
    @pathInfo = url.parse(@req.url, true)
    
  process: ->
    if /^\/javascripts\//.test @pathInfo.pathname
      new JavaScriptProcessor(@req, @res, @pathInfo).process()
    else
      new PublicProcessor(@req, @res, @pathInfo).process()

port = 3000
ip = "127.0.0.1"

server = http.createServer (req, res) ->
  app = new Application(req, res)
  app.process()

server.listen(port, ip)

console.log "Server running at http://#{ip}:#{port}/"