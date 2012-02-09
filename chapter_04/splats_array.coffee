splatter = (etc...) ->
  console.log "Length: #{etc.length}, Values: #{etc.join(', ')}" 

a = ["a", "b", "c"]
splatter(a)
splatter(a...)