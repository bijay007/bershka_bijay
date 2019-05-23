class MessageWorker {
  constructor(defaultMsg) {
    this.myMessage = defaultMsg || 'Greetings..';
  }
  setMessage = newMessage => {
  	this.myMessage = newMessage;
  }
  getMessage = () => this.myMessage
  logMessage = () => console.log(this.myMessage)
}

// Test
const MessageWorker2 =  new MessageWorker('instance message');
MessageWorker2.getMessage() // returns 'instance message'

MessageWorker2.setMessage('Oh hello there...');
MessageWorker2.logMessage() // logs out 'Oh hello there..'