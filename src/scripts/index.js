var stringUtil = require('./util/string');
var messages = require('./rice/messages');

var message = stringUtil.joinSentences(messages.DYNAMIC, messages.ENCOURAGEMENT);

var $message = document.querySelectorAll('[role="js-Message"]');

Array.prototype.forEach.call($message, function(el, index) {
  el.innerHTML = message;
});
