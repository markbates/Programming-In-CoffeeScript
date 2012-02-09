(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  require("" + __dirname + "/responder");

  Responder.Index = (function(_super) {

    __extends(Index, _super);

    function Index() {
      this.respond = __bind(this.respond, this);
      Index.__super__.constructor.apply(this, arguments);
    }

    Index.prototype.respond = function(req, res) {
      this.req = req;
      this.res = res;
      return Todo.find({}, [], {
        sort: [["created_at", -1]]
      }, this.complete);
    };

    return Index;

  })(Responder);

}).call(this);
