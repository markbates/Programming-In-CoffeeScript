# Change the syntax for underscore.js templates.
# The pattern is now {{some_var}} instead of <%= some_var %>
_.templateSettings =
  interpolate : /\{\{(.+?)\}\}/g
  
@Templates = {}

Templates.list_item_template = """
<div class="clearfix">
  <div class="input">
    <div class="input-prepend">
      <label class="add-on active"><input type="checkbox" class="todo_state" /></label>
      <input class="xlarge todo_title" size="50" type="text" value="{{title}}" />
      <button class='btn danger'>X</button>
    </div>
  </div>
</div>
"""