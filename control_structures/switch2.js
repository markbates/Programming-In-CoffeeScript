(function() {
  var today;

  today = "Sunday";

  switch (today) {
    case "Saturday":
    case "Sunday":
      console.log("Enjoy your " + today + "!");
      break;
    default:
      console.log("Off to work you go. :(");
  }

}).call(this);
