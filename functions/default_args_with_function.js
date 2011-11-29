(function() {
  var calculateTotal, defaultRate;

  defaultRate = function() {
    return 0.05;
  };

  calculateTotal = function(sub_total, rate) {
    var tax;
    if (rate == null) rate = defaultRate();
    tax = sub_total * rate;
    return sub_total + tax;
  };

  console.log(calculateTotal(100, 0.0625));

  console.log(calculateTotal(100));

}).call(this);
