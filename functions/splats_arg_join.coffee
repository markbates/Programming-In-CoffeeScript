joinArgs = (first, middles..., last) ->
  parts = []
  
  if first?
    parts.push first.toUpperCase()
    
  for middle in middles
    parts.push middle.toLowerCase()
    
  if last?
    parts.push last.toUpperCase()
      
  parts.join('/')
  
console.log joinArgs("a")
console.log joinArgs("a", "b")
console.log joinArgs("a", "B", "C", "d")