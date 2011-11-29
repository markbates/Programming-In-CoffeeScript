@updateAvatars = ->
  names = $('.avatar[data-name]').map -> $(this).data('name')
  Utils.findAvatar(name) for name in $.unique(names)