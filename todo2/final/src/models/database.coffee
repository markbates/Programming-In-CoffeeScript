# Configure Mongoose (MongoDB):
global.mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/csbook-todos")
global.Schema = mongoose.Schema
global.ObjectId = Schema.ObjectId