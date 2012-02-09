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

class Processor

  constructor: (@req, @res, @pathInfo) ->

  contentType: ->
    throw new Error("must be implemented!")

  process: ->
    throw new Error("must be implemented!")

  pathname: ->

  write: (data, status = 200, headers = {}) ->

class JavaScriptProcessor extends Processor

  contentType: ->

  process: ->

class PublicProcessor extends Processor

  contentType: ->

  process: ->

port = 3000
ip = "127.0.0.1"

server = http.createServer (req, res) ->
  app = new Application(req, res)
  app.process()

server.listen(port, ip)

console.log "Server running at http://#{ip}:#{port}/"