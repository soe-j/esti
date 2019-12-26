const EVENT_TYPE_LIST = ['end'];

class Queue {
  constructor (options) {
    this.options = options;
    this.isReady = false;
    this.functions = [];
    this.events = {};
    this.timer = undefined;
  }

  ready () {
    this.isReady = true;
  }

  push (func) {
    this.functions.push(func);
    this.kick();
  }

  kick () {
    if (this.timer) return;

    setInterval()
  }

  on (eventName, func) {
    if (!HANDLER_TYPE_LIST.includes(eventName)) {
      throw Error(`unknown event! You can use there: ${EVENT_TYPE_LIST}`);
    }

    this.events[eventName] = func;
  }
}

exports.create = () => {
  return new Queue();
}
