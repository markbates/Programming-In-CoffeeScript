(function() {
  var calculateTotal, default_tax_rate, val;

  default_tax_rate = 0.0625;

  calculateTotal = function(sub_total, rate) {
    var tax;
    if (rate == null) rate = default_tax_rate;
    tax = sub_total * rate;
    return sub_total + tax;
  };

  val = 100;

  console.log("What is the total of $" + val + " worth of shopping?");

  console.log("The total is " + (calculateTotal(val)));

  val = 200;

  console.log("What is the total of $" + val + " worth of shopping?");

  console.log("The total is " + (calculateTotal(val)));

}).call(this);
