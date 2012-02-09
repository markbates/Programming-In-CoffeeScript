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
    ext = (/\.(.+)$/.exec(@pathname()))[1].toLowerCase()
    switch ext
      when "png", "jpg", "jpeg", "gif"
        "image/#{ext}"
      when "css"
        "text/css"
      else
        "text/html"
        
  process: ->
    fs.readFile "public/#{@pathname()}", "utf-8", (err, data) =>
      if err?
        @write("Oops! We couldn't find the page you were looking for.", 404)
      else
        @write(data)
        
  pathname: ->
    unless @_pathname
      if @pathInfo.pathname is "/" or @pathInfo.pathname is ""
        @pathInfo.pathname = "index"
      unless /\..+$/.test @pathInfo.pathname
        @pathInfo.pathname += ".html"
      @_pathname = @pathInfo.pathname
    return @_pathname

port = 3000
ip = "127.0.0.1"

server = http.createServer (req, res) ->
  app = new Application(req, res)
  app.process()

server.listen(port, ip)

console.log "Server running at http://#{ip}:#{port}/"