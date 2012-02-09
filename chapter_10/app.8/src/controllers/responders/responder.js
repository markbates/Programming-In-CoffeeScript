(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  global.Responder = (function() {

    function Responder() {
      this.complete = __bind(this.complete, this);
      this.respond = __bind(this.respond, this);
    }

    Responder.prototype.respond = function(req, res) {
      this.req = req;
      this.res = res;
      return this.complete(null, {});
    };

    Responder.prototype.complete = function(err, result) {
      if (result == null) result = {};
      if (err != null) {
        return this.res.json(err, 500);
      } else {
        return this.res.json(result);
      }
    };

    return Responder;

  })();

}).call(this);
