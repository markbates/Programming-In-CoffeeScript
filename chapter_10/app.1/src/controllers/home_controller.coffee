# Set up a routing for our homepage:
app.get '/', (req, res) ->
  res.send "Hello, World!"