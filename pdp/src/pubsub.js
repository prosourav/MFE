// pubsub.js

const subscribers = {};

const pubsub = {
  subscribe: (event, callback) => {
    if (!subscribers[event]) {
      subscribers[event] = [];
    }
    subscribers[event].push(callback);
  },

  publish: (event, data) => {
    if (!subscribers[event]) return;
    subscribers[event].forEach((callback) => callback(data));
  },

  unsubscribe: (event, callback) => {
    if (!subscribers[event]) return;
    subscribers[event] = subscribers[event].filter(cb => cb !== callback);
  }
};

export default pubsub;
