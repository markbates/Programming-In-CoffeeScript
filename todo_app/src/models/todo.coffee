# The Todo Mongoose model:
global.Todo = mongoose.model 'Todo', new Schema
  id : ObjectId
  title : 
    type: String
    validate: /.{3,}/
  state: 
    type: String
    default: 'pending'
  created_at:
    type: Date
    default: Date.now
    
# Todo.remove {title: null}, (err) ->
#   console?.log err