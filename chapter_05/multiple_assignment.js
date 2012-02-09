(function() {
  var body, headers, rack, status, _ref;

  rack = function() {
    return [
      200, {
        "Content-Type": "text/html"
      }, "Hello Rack!"
    ];
  };

  console.log(rack());

  _ref = rack(), status = _ref[0], headers = _ref[1], body = _ref[2];

  console.log("status is " + status);

  console.log("headers is " + (JSON.stringify(headers)));

  console.log("body is " + body);

}).call(this);
