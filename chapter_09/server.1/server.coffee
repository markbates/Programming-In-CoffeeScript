http = require('http')

port = 3000
ip = "127.0.0.1"

server = http.createServer (req, res) ->
  data = "Hello World!"
  res.writeHead 200, 
    "Content-Type": "text/plain"
    "Content-Length": Buffer.byteLength(data, "utf-8")
  res.write(data, "utf-8")
  res.end()

server.listen(port, ip)

console.log "Server running at http://#{ip}:#{port}/"