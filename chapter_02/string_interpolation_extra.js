(function() {
  var day, text;

  text = "Add numbers: " + (1 + 1);

  console.log(text);

  text = "Call a function: " + (escape("Hello, World!"));

  console.log(text);

  day = 'Sunday';

  console.log("It's a beautiful " + (day === 'Sunday' ? day : "Day"));

}).call(this);
