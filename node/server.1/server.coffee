http = require('http')

server = http.createServer (req, res) ->
  do (req, res) ->
    res.writeHead(200, "Content-Type": "text/plain")
    res.end("Hello World!")

server.listen(3000, "127.0.0.1")

console.log 'Server running at http://127.0.0.1:3000/'