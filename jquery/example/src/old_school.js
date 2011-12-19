
  window.onload = function() {
    var url, xmlHttpRequst;
    url = "https://api.github.com/events";
    xmlHttpRequst = new XMLHttpRequest();
    xmlHttpRequst.open("get", url, true);
    xmlHttpRequst.onreadystatechange = function() {
      var el, event, json, _i, _len;
      if (xmlHttpRequst.readyState === 4) {
        json = JSON.parse(xmlHttpRequst.responseText);
        el = document.getElementById("old_school");
        el.innerHTML = "Hello Old School Style!";
        el.innerHTML += "<ul>";
        for (_i = 0, _len = json.length; _i < _len; _i++) {
          event = json[_i];
          el.innerHTML += "<li>" + event.type + " by " + event.actor.url + "</li>";
        }
        return el.innerHTML += "</ul>";
      }
    };
    return xmlHttpRequst.send();
  };
