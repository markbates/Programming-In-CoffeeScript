(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  require("" + __dirname + "/show_responder");

  Responder.Update = (function(_super) {

    __extends(Update, _super);

    function Update() {
      this.complete = __bind(this.complete, this);
      Update.__super__.constructor.apply(this, arguments);
    }

    Update.prototype.complete = function(err, result) {
      if (result == null) result = {};
      if (err != null) {
        return Update.__super__.complete.apply(this, arguments);
      } else {
        result.set(this.req.param('todo'));
        return result.save(Update.__super__.complete.apply(this, arguments));
      }
    };

    return Update;

  })(Responder.Show);

}).call(this);
