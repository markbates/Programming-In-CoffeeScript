window.onload = ->
  url = "https://api.github.com/events"

  xmlHttpRequst = new XMLHttpRequest()    
  xmlHttpRequst.open("get", url, true)
  xmlHttpRequst.onreadystatechange = ->
    if xmlHttpRequst.readyState is 4
      json = JSON.parse(xmlHttpRequst.responseText)
      # Get the DOM element:
      el = document.getElementById("old_school")
      el.innerHTML = "Hello Old School Style!"
      el.innerHTML += "<ul>"
      for event in json
        el.innerHTML += "<li>#{event.type} by #{event.actor.url}</li>"
      el.innerHTML += "</ul>"
  xmlHttpRequst.send()