$(function()
  $.get('example.php', function(data)
    if (data.errors != null)
      alert("There was an error!")
    else
      $("#content").text(data.message)
  , 'json')
)