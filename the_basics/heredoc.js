(function() {
  var field, someId, someName, someValue;

  someName = 'user[firstName]';

  someId = 'firstName';

  someValue = 'Bob Example';

  field = "<ul>\n  <li>\n    <input type='text' name='" + someName + "' id='" + someId + "' value='" + (escape(someValue)) + "'>\n  </li>\n</ul>";

  console.log(field);

}).call(this);
