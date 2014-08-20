(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var stringUtil = require('./util/string');
var messages = require('./rice/messages');

var message = stringUtil.joinSentences(messages.DYNAMIC, messages.ENCOURAGEMENT);

var $message = document.querySelectorAll('[role="js-Message"]');

Array.prototype.forEach.call($message, function(el, index) {
  el.innerHTML = message;
});

},{"./rice/messages":2,"./util/string":3}],2:[function(require,module,exports){
module.exports={
  "DYNAMIC": "Dynamic, local content is amazing.",
  "ENCOURAGEMENT": "You should try this sometime."
}

},{}],3:[function(require,module,exports){

var joinSentences = function(a, b) {
  return [a, b].join(' ');
};

module.exports = {
  joinSentences: joinSentences
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYXNoYW0vcmVwb3MvcmljZS10YXNrLXJ1bm5lcnMvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCIvVXNlcnMvYmFzaGFtL3JlcG9zL3JpY2UtdGFzay1ydW5uZXJzL3NyYy9zY3JpcHRzL3JpY2UvbWVzc2FnZXMuanNvbiIsIi9Vc2Vycy9iYXNoYW0vcmVwb3MvcmljZS10YXNrLXJ1bm5lcnMvc3JjL3NjcmlwdHMvdXRpbC9zdHJpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBzdHJpbmdVdGlsID0gcmVxdWlyZSgnLi91dGlsL3N0cmluZycpO1xudmFyIG1lc3NhZ2VzID0gcmVxdWlyZSgnLi9yaWNlL21lc3NhZ2VzJyk7XG5cbnZhciBtZXNzYWdlID0gc3RyaW5nVXRpbC5qb2luU2VudGVuY2VzKG1lc3NhZ2VzLkRZTkFNSUMsIG1lc3NhZ2VzLkVOQ09VUkFHRU1FTlQpO1xuXG52YXIgJG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cImpzLU1lc3NhZ2VcIl0nKTtcblxuQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCgkbWVzc2FnZSwgZnVuY3Rpb24oZWwsIGluZGV4KSB7XG4gIGVsLmlubmVySFRNTCA9IG1lc3NhZ2U7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJEWU5BTUlDXCI6IFwiRHluYW1pYywgbG9jYWwgY29udGVudCBpcyBhbWF6aW5nLlwiLFxuICBcIkVOQ09VUkFHRU1FTlRcIjogXCJZb3Ugc2hvdWxkIHRyeSB0aGlzIHNvbWV0aW1lLlwiXG59XG4iLCJcbnZhciBqb2luU2VudGVuY2VzID0gZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gW2EsIGJdLmpvaW4oJyAnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBqb2luU2VudGVuY2VzOiBqb2luU2VudGVuY2VzXG59O1xuIl19
