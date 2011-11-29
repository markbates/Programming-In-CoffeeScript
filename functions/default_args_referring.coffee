href = (text, url = text) ->
  html = "<a href='#{url}'>#{text}</a>"
  return html
  
console.log href("Click Here", "http://www.example.com")
console.log href("http://www.example.com")