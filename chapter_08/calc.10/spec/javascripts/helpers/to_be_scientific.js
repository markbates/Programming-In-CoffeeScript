(function() {

  beforeEach(function() {
    return this.addMatchers({
      toBeScientific: function() {
        return this.actual.scientific === true;
      }
    });
  });

}).call(this);
