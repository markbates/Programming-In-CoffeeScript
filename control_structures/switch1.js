(function() {
  var today;

  today = "Monday";

  switch (today) {
    case "Saturday":
      console.log("Here are your todos for the day...");
      break;
    case "Sunday":
      console.log("Go watch football and relax!");
      break;
    default:
      console.log("Get to work you lazy bum!");
  }

}).call(this);
