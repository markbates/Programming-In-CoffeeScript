(function() {

  global.Todo = mongoose.model('Todo', new Schema({
    id: ObjectId,
    title: {
      type: String,
      validate: /.+/
    },
    state: {
      type: String,
      "default": 'pending'
    },
    created_at: {
      type: Date,
      "default": Date.now
    }
  }));

}).call(this);
