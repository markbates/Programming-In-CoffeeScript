$ ->
  url = "https://api.github.com/events"
  
  $.get url, (data)->
    # Get the DOM element:
    el = $('#new_school')
    el.html("Hello New School Style!")
    .append("<ul>")
    for event in data
      el.append("<li>#{event.type} by #{event.actor.url}</li>")
    el.append("</ul>")