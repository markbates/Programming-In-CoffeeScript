(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  require("" + __dirname + "/show_responder");

  Responder.Destroy = (function(_super) {

    __extends(Destroy, _super);

    function Destroy() {
      this.complete = __bind(this.complete, this);
      Destroy.__super__.constructor.apply(this, arguments);
    }

    Destroy.prototype.complete = function(err, result) {
      if (result == null) result = {};
      if (err == null) result.remove();
      return Destroy.__super__.complete.apply(this, arguments);
    };

    return Destroy;

  })(Responder.Show);

}).call(this);
