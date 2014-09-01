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

},{}]},{},[1]);
