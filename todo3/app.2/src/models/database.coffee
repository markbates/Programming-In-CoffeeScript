# Configure Mongoose (MongoDB):
global.mongoose = require('mongoose')
global.Schema = mongoose.Schema
global.ObjectId = Schema.ObjectId
mongoose.connect("mongodb://localhost:27017/csbook-todos")