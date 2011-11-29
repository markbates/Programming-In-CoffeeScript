obj =
  firstName: "Mark"
  lastName: "Bates"
  fullName: ->
    "#{@firstName} #{@lastName}"

console.log obj.firstName
console.log obj['lastName']
console.log obj.fullName()