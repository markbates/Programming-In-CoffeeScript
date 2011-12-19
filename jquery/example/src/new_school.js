
  $(function() {
    var url;
    url = "https://api.github.com/events";
    return $.get(url, function(data) {
      var el, event, _i, _len;
      el = $('#new_school');
      el.html("Hello New School Style!").append("<ul>");
      for (_i = 0, _len = data.length; _i < _len; _i++) {
        event = data[_i];
        el.append("<li>" + event.type + " by " + event.actor.url + "</li>");
      }
      return el.append("</ul>");
    });
  });
