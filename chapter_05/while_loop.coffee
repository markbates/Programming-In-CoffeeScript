times = (number_of_times, callback)->
  index = 0
  while index++ < number_of_times
    callback(index)
  return null
    
times 5, (index)->
  console.log index