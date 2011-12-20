# Configure Mongoose (MongoDB):
global.mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/csbook-todos")
global.Schema = mongoose.Schema
global.ObjectId = Schema.ObjectId

# Require Express.js:
express = require('express')
global.app = app = module.exports = express.createServer()

# Configure Express.js:
app.configure =>
  app.set('views', "#{__dirname}/src/views")
  app.set 'view engine', 'ejs'
  app.use(express.bodyParser())
  app.use(express.methodOverride())
  app.use(express.cookieParser())
  app.use(express.session(secret: 'your secret here'))
  app.use(global.app.router)
  app.use(express.static(__dirname + '/public'))
  app.use require('connect-assets')()

# Set up error handling for development:
app.configure 'development', =>
  app.use(express.errorHandler(dumpExceptions: true, showStack: true))

# Require the Todo model and controller:
require("#{__dirname}/src/models/todo")
require("#{__dirname}/src/controllers/todos_controller")

# Set up a routing for our homepage:
app.get '/', (req, res) =>
  res.render 'index', layout: false

# Start server:
app.listen(3000)
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env)
