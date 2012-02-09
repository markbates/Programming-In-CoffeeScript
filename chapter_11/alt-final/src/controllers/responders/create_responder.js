(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  require("" + __dirname + "/responder");

  Responder.Create = (function(_super) {

    __extends(Create, _super);

    function Create() {
      this.respond = __bind(this.respond, this);
      Create.__super__.constructor.apply(this, arguments);
    }

    Create.prototype.respond = function(req, res) {
      var todo;
      this.req = req;
      this.res = res;
      todo = new Todo(this.req.param('todo'));
      return todo.save(this.complete);
    };

    return Create;

  })(Responder);

}).call(this);
