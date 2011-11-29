(function() {
  var calculateTotal;

  calculateTotal = function(sub_total, rate) {
    var tax;
    tax = sub_total * rate;
    return sub_total + tax;
  };

  console.log(calculateTotal(100, 0.0625));

}).call(this);
