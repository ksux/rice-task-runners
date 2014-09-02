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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxub2RlXFxwcm9qZWN0c1xca3VhbGktdGFzay1ydW5uZXJzXFxub2RlX21vZHVsZXNcXGdydW50LWJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiQzovbm9kZS9wcm9qZWN0cy9rdWFsaS10YXNrLXJ1bm5lcnMvc3JjL3NjcmlwdHMvaW5kZXguanMiLCJDOi9ub2RlL3Byb2plY3RzL2t1YWxpLXRhc2stcnVubmVycy9zcmMvc2NyaXB0cy9yaWNlL21lc3NhZ2VzLmpzb24iLCJDOi9ub2RlL3Byb2plY3RzL2t1YWxpLXRhc2stcnVubmVycy9zcmMvc2NyaXB0cy91dGlsL3N0cmluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHN0cmluZ1V0aWwgPSByZXF1aXJlKCcuL3V0aWwvc3RyaW5nJyk7XHJcbnZhciBtZXNzYWdlcyA9IHJlcXVpcmUoJy4vcmljZS9tZXNzYWdlcycpO1xyXG5cclxudmFyIG1lc3NhZ2UgPSBzdHJpbmdVdGlsLmpvaW5TZW50ZW5jZXMobWVzc2FnZXMuRFlOQU1JQywgbWVzc2FnZXMuRU5DT1VSQUdFTUVOVCk7XHJcblxyXG52YXIgJG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cImpzLU1lc3NhZ2VcIl0nKTtcclxuXHJcbkFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoJG1lc3NhZ2UsIGZ1bmN0aW9uKGVsLCBpbmRleCkge1xyXG4gIGVsLmlubmVySFRNTCA9IG1lc3NhZ2U7XHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cz17XHJcbiAgXCJEWU5BTUlDXCI6IFwiRHluYW1pYywgbG9jYWwgY29udGVudCBpcyBhbWF6aW5nLlwiLFxyXG4gIFwiRU5DT1VSQUdFTUVOVFwiOiBcIllvdSBzaG91bGQgdHJ5IHRoaXMgc29tZXRpbWUuXCJcclxufVxyXG4iLCJcclxudmFyIGpvaW5TZW50ZW5jZXMgPSBmdW5jdGlvbihhLCBiKSB7XHJcbiAgcmV0dXJuIFthLCBiXS5qb2luKCcgJyk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBqb2luU2VudGVuY2VzOiBqb2luU2VudGVuY2VzXHJcbn07XHJcbiJdfQ==
