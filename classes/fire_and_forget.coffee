fire = (msg, wait)->
  setTimeout ->
    console.log msg
  , wait
  
fire("Hello", 3000)
fire("World", 1000)