
(function (window) {
  var byeSpeaker = {};
  var greet = "Good Bye";
  byeSpeaker.speak = function(name) {
    byeSpeaker.name = name;
    console.log(greet + " " + name);
  }
  window.byeSpeaker = byeSpeaker;
})(window);
