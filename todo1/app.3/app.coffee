# Setup Express.js:
global.express = require('express')
global.app = app = express.createServer()
require("#{__dirname}/src/configuration")

# Set up the Database:
require("#{__dirname}/src/models/database")

# Require the Todo model:
require("#{__dirname}/src/models/todo")

# Set up a routing for our homepage:
require("#{__dirname}/src/controllers/home_controller")

# Start server:
app.listen(3000)
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env)