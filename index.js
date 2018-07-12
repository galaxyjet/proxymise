const debug = require('debug')('proxymise');

const proxy = (target) => {
  if (typeof target === 'object' || typeof target === 'function') {
    return new Proxy(target, handler);
  }
  return target;
};

const handler = {
  /**
   * Trap for getting a property value
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get
   */
  get(target, property, receiver) {
    debug('get', property);
    return proxy(Reflect.get(target, property, receiver));
  }
};

module.exports = proxy;
