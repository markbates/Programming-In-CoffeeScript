(function() {
  var calculateTotal;

  calculateTotal = function(sub_total, rate) {
    var tax;
    if (rate == null) rate = 0.05;
    tax = sub_total * rate;
    return sub_total + tax;
  };

  console.log(calculateTotal(100, 0.0625));

  console.log(calculateTotal(100));

}).call(this);
