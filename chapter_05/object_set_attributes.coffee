obj =
  firstName: "Mark"
  lastName: "Bates"
  fullName: ->
    "#{@firstName} #{@lastName}"

obj.firstName = 'MARK'
console.log obj.firstName
obj['lastName'] = 'BATES'
console.log obj['lastName']
