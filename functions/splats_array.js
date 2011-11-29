(function() {
  var a, splatter;
  var __slice = Array.prototype.slice;

  splatter = function() {
    var etc;
    etc = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return console.log("Length: " + etc.length + ", Values: " + (etc.join(', ')));
  };

  a = ["a", "b", "c"];

  splatter(a);

  splatter.apply(null, a);

}).call(this);
