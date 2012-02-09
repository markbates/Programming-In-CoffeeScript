http = require('http')
url = require('url')
fs = require('fs')
CoffeeScript = require('coffee-script')

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
    @pathInfo.pathname

  write: (data, status = 200, headers = {}) ->
    headers["Content-Type"] ||= @contentType()
    headers["Content-Length"] ||= Buffer.byteLength(data, "utf-8")
    @res.writeHead(status, headers)
    @res.write(data, "utf-8")
    @res.end()

class JavaScriptProcessor extends Processor

  contentType: ->
    "application/x-javascript"

  pathname: ->
    file = (/\/javascripts\/(.+)\.js/.exec(@pathInfo.pathname))[1]
    return "#{file}.coffee"

  process: ->
    fs.readFile "src/#{@pathname()}", "utf-8", (err, data) =>
      if err?
        @write("", 404)
      else
        @write(CoffeeScript.compile(data))

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