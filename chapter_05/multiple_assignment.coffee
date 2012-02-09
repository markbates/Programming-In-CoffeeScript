rack = ->
  [200, {"Content-Type": "text/html"}, "Hello Rack!"]
  
console.log rack()

[status, headers, body] = rack()

console.log "status is #{status}"
console.log "headers is #{JSON.stringify(headers)}"
console.log "body is #{body}"