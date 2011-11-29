(function() {
  var href;

  href = function(text, url) {
    var html;
    if (url == null) url = text;
    html = "<a href='" + url + "'>" + text + "</a>";
    return html;
  };

  console.log(href("Click Here", "http://www.example.com"));

  console.log(href("http://www.example.com"));

}).call(this);
