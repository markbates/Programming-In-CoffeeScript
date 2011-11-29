http = require('http')
url = require('url')
fs = require('fs')
CoffeeScript = require('coffee-script')

class Application
  
  constructor: (@req, @res) ->
    @pathInfo = url.parse(@req.url, true)
    
  process: (callback) ->
    @startTime = new Date()
    
    @standardizePathname()
    @setContentType()
      
    if /^\/javascripts\//.test @pathname
      @processJavascript()
    else
      @processPublic()
      
    @endTime = new Date()
    callback(@)
    
  processJavascript: ->
    file = (/\/javascripts\/(.+)\.js/.exec @pathname)[1]
    fs.readFile "src/#{file}.coffee", "utf-8", (err, data) =>
      if err?
        @write("", 404)
      else
        js = CoffeeScript.compile(data)
        @write(js)
        
  processPublic: ->
    fs.readFile "public/#{@pathname}", "utf-8", (err, data) =>
      if err?
        @write("Oops! We couldn't find the page you were looking for.", 404)
      else
        @write(data)    
    
  standardizePathname: ->
    if @pathInfo.pathname is "/" or @pathInfo.pathname is ""
      @pathInfo.pathname = "index"
    unless /\..+$/.test @pathInfo.pathname
      @pathInfo.pathname += ".html"
    @pathname = @pathInfo.pathname
    
  setContentType: ->
    ext = (/\.(.+)$/.exec @pathname)[1].toLowerCase()
    switch ext
      when "png", "jpg", "jpeg", "gif"
        @contentType = "image/#{ext}"
      when "js"
        @contentType = "application/x-javascript"
      else
        @contentType = "text/html"
  
  write: (data, status = 200, headers = {}) ->
    headers["Content-Type"] ||= @contentType
    @res.writeHead(status, headers)
    @res.end(data)
    
  time: ->
    @endTime - @startTime

server = http.createServer (req, res) ->
  do ->
    app = new Application(req, res)
    app.process (app)->
      console?.log "Processed: #{req.url} (#{app.time()}ms)"

server.listen(3000, "127.0.0.1")

console.log 'Server running at http://127.0.0.1:3000/'