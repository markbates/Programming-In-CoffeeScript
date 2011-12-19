(function() {

  $(function() {
    return $.get('example.php', function(data) {
      if (data.errors != null) {
        return alert("There was an error!");
      } else {
        return $("#content").text(data.message);
      }
    }, 'json');
  });

}).call(this);
