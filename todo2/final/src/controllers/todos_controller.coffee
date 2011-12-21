# This 'controller' will handle the server requests
# for the Todo resource

# Get a list of the todos:
app.get '/api/todos', (req, res) ->
  query = Todo.find({})
  query.desc('created_at')
  query.exec (err, @todos) =>
    if err?
      res.json(err, 500)
    else
      res.json @todos
  
# Get a specific todo:
app.get '/api/todos/:id', (req, res) ->
  Todo.findOne {_id: req.param('id')}, (err, @todo) =>
    if err?
      res.json(err, 500)
    else
      res.json @todo
  
# Create a new todo:
app.post '/api/todos', (req, res) ->
  @todo = new Todo(req.param('todo'))
  @todo.save (err) =>
    if err?
      res.json(err, 500)
    else
      res.json @todo
    
# Update a specific todo:
app.put "/api/todos/:id", (req, res) ->
  Todo.findOne {_id: req.param('id')}, (err, @todo) =>
    @todo.set(req.param('todo'))
    @todo.save (err) =>
      if err?
        res.json(err, 500)
      else
        res.json @todo
      
# Destroy a specific todo:
app.delete '/api/todos/:id', (req, res) ->
  Todo.findOne {_id: req.param('id')}, (err, @todo) =>
    if err?
      res.json(err, 500)
    else
      @todo.remove()
      res.json {}