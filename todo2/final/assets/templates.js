(function() {

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  this.Templates = {};

  Templates.list_item_template = "<div class=\"clearfix\">\n  <div class=\"input\">\n    <div class=\"input-prepend\">\n      <label class=\"add-on active\"><input type=\"checkbox\" class=\"todo_state\" /></label>\n      <input class=\"xlarge todo_title\" size=\"50\" type=\"text\" value=\"{{title}}\" />\n      <button class='btn danger'>X</button>\n    </div>\n  </div>\n</div>";

}).call(this);
