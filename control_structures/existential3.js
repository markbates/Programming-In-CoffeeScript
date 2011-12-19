(function() {

  console.log("Hello, World");

  console.log(typeof someObject !== "undefined" && someObject !== null ? someObject.someFunction() : void 0);

  console.log("Goodbye, World");

}).call(this);
