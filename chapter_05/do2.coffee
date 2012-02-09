for x in [1..5]
  do (x) ->
    setTimeout -> 
      console.log x
    , 1