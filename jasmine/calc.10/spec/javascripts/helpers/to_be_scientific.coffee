beforeEach ->
  @addMatchers
    toBeScientific: ->
      @actual.scientific is true
