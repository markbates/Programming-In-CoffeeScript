# This 'controller' will handle the server requests
# for the Todo resource

# Get a list of the todos:
app.get '/api/todos', (req, res) ->
  res.json [{}]

# Create a new todo:
app.post '/api/todos', (req, res) ->
  res.json {}
  
# Get a specific todo:
app.get '/api/todos/:id', (req, res) ->
  res.json {}
    
# Update a specific todo:
app.put "/api/todos/:id", (req, res) ->
  res.json {}
      
# Destroy a specific todo:
app.delete '/api/todos/:id', (req, res) ->
  res.json {}