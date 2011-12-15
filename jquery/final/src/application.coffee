class @Calculator
  
  constructor: ->
    @buffer = ""
    @lastFunction = ""
    @display = $('input')
    @clear()
    $('button.primary').click @numberClicked
    $('#c').click @clear
    $('#inv').click @invertSign
    $('.func').click @functionClicked
    $('#eql').click @calculateValue
    
  calculateValue: (e)=>
    e?.preventDefault()
    value = switch @lastFunction
      when "*"
        parseFloat(@buffer) * parseFloat(@getDisplay())
      when "/"
        parseFloat(@buffer) / parseFloat(@getDisplay())
      when "-"
        parseFloat(@buffer) - parseFloat(@getDisplay())
      when "+"
        parseFloat(@buffer) + parseFloat(@getDisplay())
    @lastFunction = ""
    @buffer = @getDisplay()
    @setDisplay(value)
    
  functionClicked: (e)=>
    if @buffer? and @buffer isnt ""
      @calculateValue()
    else
      @buffer = @getDisplay()
      @setDisplay("")
    @lastFunction = $(e.target).text()
    
  invertSign: (e)=>
    e.preventDefault()
    if /^-/.test @getDisplay()
      @setDisplay(@getDisplay().replace('-', ''))
    else
      @setDisplay("-#{@getDisplay()}")

  clear: (e)=>
    e?.preventDefault()
    @setDisplay("")
    @lastFunction = ""
    
  numberClicked: (e)=>
    e.preventDefault()
    val = $(e.target).text()
    if val is "."
      return if /\./.test @getDisplay()
    @setDisplay("#{@getDisplay()}#{val}")
    
  setDisplay: (val)->
    @display.val(val)
    
  getDisplay: (val)->
    @display.val()
