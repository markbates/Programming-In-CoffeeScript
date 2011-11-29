(function() {
  var today;

  today = "Monday";

  if (today === "Saturday") {
    console.log("Here are your todos for the day...");
  } else if (today === "Sunday") {
    console.log("Go watch football and relax!");
  } else {
    console.log("Get to work you lazy bum!");
  }

}).call(this);
