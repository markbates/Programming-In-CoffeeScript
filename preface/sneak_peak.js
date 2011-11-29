
  this.updateAvatars = function() {
    var name, names, _i, _len, _ref, _results;
    names = $('.avatar[data-name]').map(function() {
      return $(this).data('name');
    });
    _ref = $.unique(names);
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      name = _ref[_i];
      _results.push(Utils.findAvatar(name));
    }
    return _results;
  };
