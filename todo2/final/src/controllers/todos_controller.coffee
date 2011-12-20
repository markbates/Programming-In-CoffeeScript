# This 'controller' will handle the server requests
# for the Todo resource

# Get a list of the todos:
app.get '/todos', (req, res) ->
  query = Todo.find({})
  query.desc('created_at')
  query.exec (err, @todos) =>
    res.send JSON.stringify(@todos)
  
# Get a specific todo:
app.get '/todos/:id', (req, res) ->
  Todo.findOne {_id: req.param('id')}, (err, @todo) =>
    res.send JSON.stringify(@todo)
  
# Create a new todo:
app.post '/todos', (req, res) ->
  @todo = new Todo(req.param('todo'))
  @todo.save (err) =>
    res.send JSON.stringify(@todo)
    
# Update a specific todo:
app.put "/todos/:id", (req, res) ->
  Todo.findOne {_id: req.param('id')}, (err, @todo) =>
    @todo.set(req.param('todo'))
    @todo.save (err) =>
      res.send JSON.stringify(@todo)
      
# Destroy a specific todo:
app.delete '/todos/:id', (req, res) ->
  Todo.findOne {_id: req.param('id')}, (err, @todo) =>
    @todo.remove()
    res.send JSON.stringify({})