# require all of our responders:
for name in ["index", "create", "show", "update", "destroy"]
  require("#{__dirname}/responders/#{name}_responder")
    
# This 'controller' will handle the server requests
# for the Todo resource

# Get a list of the todos:
app.get '/api/todos', new Responder.Index().respond

# Create a new todo:
app.post '/api/todos', new Responder.Create().respond
  
# Get a specific todo:
app.get '/api/todos/:id', new Responder.Show().respond
  
# Update a specific todo:
app.put "/api/todos/:id", new Responder.Update().respond
      
# Destroy a specific todo:
app.delete '/api/todos/:id', new Responder.Destroy().respond