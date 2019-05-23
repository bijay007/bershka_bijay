const messageWorker = (function() {
	let myMessage = 'Private message..';
  const setMessage = function(newMessage) {
  	myMessage = newMessage;
  }
  const getMessage = function() {
  	return myMessage;
  }
  const logMessage = function() {
  	console.log(myMessage);
  }
  return {
  	setMessage,
    getMessage,
    logMessage
  }
})();

// Test
messageWorker.getMessage() // returns 'Private message..'

messageWorker.setMessage('Oh hello there...');
messageWorker.logMessage() // logs out 'Oh hello there..'