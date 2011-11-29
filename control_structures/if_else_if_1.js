(function() {
  var today;

  today = "Monday";

  if (today === "Saturday") console.log("Here are your todos for the day...");

  if (today === "Sunday") console.log("Go watch football and relax!");

  if (today !== "Saturday" && today !== "Sunday") {
    console.log("Get to work you lazy bum!");
  }

}).call(this);
