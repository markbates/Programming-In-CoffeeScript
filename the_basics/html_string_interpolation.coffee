someName = 'user[firstName]'
someId = 'firstName'
someValue = 'Bob Example'

field = "<input type='text' name='#{someName}' id='#{someId}' value='#{escape someValue}'>"

console.log field