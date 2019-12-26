const Queue = require('./index');
const queue = Queue.create({
  jobs: 10,
  log: true,
  timeout: 10000, // millisecond
  gracePeriod: 30000 // millisecond
});
queue.ready();

new Array(100).fill().forEach(item => {
  const func = () => {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(item)
        }, 1000);
      } catch (err) {
        reject(err)
      }
    });
  };

  queue.push(func);
});

queue.on('end', () => {
  console.log('FINISH!');
});
